import crypto from 'crypto';

const LEN = 200;
const SALT_LEN = 50;
const ITERATIONS = 1000;
const DIGEST = 'sha256';

export const hashPassword = async ({ password, salt }) => {
  const len = LEN / 2;

  // generate new salt if undefined
  if (!salt) {
    // eslint-disable-next-line
    const { result: resultSalt, err: saltError } = await new Promise(resolve => {
        crypto.randomBytes(SALT_LEN / 2, (err, result) => {
          if (err) {
            return resolve({ err });
          }

          return resolve({ result: result.toString('hex') });
        });
      },
    );

    if (saltError) {
      return { error: saltError };
    }

    salt = resultSalt;
  }

  // hash password
  const hashedResult = await new Promise(resolve => {
    crypto.pbkdf2(
      password,
      salt,
      ITERATIONS,
      len,
      DIGEST,
      (error, derivedKey) => {
        if (error) {
          return resolve({ error });
        }

        return resolve({ hashedPassword: derivedKey.toString('hex') });
      },
    );
  });

  const { hashedPassword, error } = hashedResult;
  if (error) {
    return { error };
  }

  return { hashedPassword, salt };
};

export default hashPassword;
