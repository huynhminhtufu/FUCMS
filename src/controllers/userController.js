import { User, UserLogin, UserClaim, UserProfile } from '../data/models';
import { hashPassword } from '../helpers/password';

export const signUp = async data => {
  const hashedResult = await hashPassword({
    password: data.password,
  });
  const { hashedPassword, salt, error } = hashedResult;

  if (error) {
    return error;
  }

  const user = await User.create(
    {
      email: data.email,
      emailConfirmed: false,
      logins: [{ name: 'username', key: data.username }],
      claims: [
        { type: 'password', value: hashedPassword },
        { type: 'salt', value: salt },
      ],
      profile: {
        displayName: data.name,
      },
    },
    {
      include: [
        { model: UserLogin, as: 'logins' },
        { model: UserClaim, as: 'claims' },
        { model: UserProfile, as: 'profile' },
      ],
    },
  );

  return user;
};

export default signUp;
