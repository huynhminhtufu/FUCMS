import { User, UserLogin, UserClaim, UserProfile } from '../data/models';
import { hashPassword } from '../helpers/password';

export const signUp = async data => {
  const { hashedPassword, salt, error } = hashPassword({
    password: data.password,
  });

  if (error) {
    return error;
  }

  const user = await User.create(
    {
      email: data.email,
      emailConfirmed: false,
      logins: [
        { name: 'username', key: data.username },
        { name: 'email', key: data.email },
      ],
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
