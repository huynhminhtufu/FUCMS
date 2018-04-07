import { User, UserLogin, UserClaim, UserProfile } from '../data/models';
import { hashPassword } from '../helpers/password';
import sendMail from '../helpers/mailer';
import confirmEmail from '../mailTemplates/confirmEmail';

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

  const html = confirmEmail({
    name: data.name,
    confirmLink: 'https://fu-cms.herokuapp.com',
    homeLink: 'https://fu-cms.herokuapp.com',
    helpLink: 'https://fu-cms.herokuapp.com/contact',
  });

  const mailOptions = {
    to: data.email,
    subject: 'FUCMS - Confirm your registration!',
    // text: 'That was easy!', // or html
    html,
  };

  sendMail(mailOptions, ({error, info}) => {
    console.log({error, info});
  });

  return user;
};

export default signUp;
