/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as LocalStrategy } from 'passport-local';
import { User, UserLogin, UserClaim, UserProfile } from './data/models';
import config from './config';
import { hashPassword } from './helpers/password';

/**
 * Sign in with Facebook.
 */
passport.use(
  new FacebookStrategy(
    {
      clientID: config.auth.facebook.id,
      clientSecret: config.auth.facebook.secret,
      callbackURL: '/login/facebook/return',
      profileFields: [
        'displayName',
        'name',
        'email',
        'link',
        'locale',
        'timezone',
      ],
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      /* eslint-disable no-underscore-dangle */
      const loginName = 'facebook';
      const claimType = 'urn:facebook:access_token';
      const fooBar = async () => {
        if (req.user) {
          const userLogin = await UserLogin.findOne({
            attributes: ['name', 'key'],
            where: { name: loginName, key: profile.id },
          });
          if (userLogin) {
            // There is already a Facebook account that belongs to you.
            // Sign in with that account or delete it, then link it with your current account.
            done();
          } else {
            const user = await User.create(
              {
                id: req.user.id,
                email: profile._json.email,
                logins: [{ name: loginName, key: profile.id }],
                claims: [{ type: claimType, value: profile.id }],
                profile: {
                  displayName: profile.displayName,
                  gender: profile._json.gender,
                  picture: `https://graph.facebook.com/${
                    profile.id
                  }/picture?type=large`,
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
            done(null, {
              id: user.id,
              email: user.email,
            });
          }
        } else {
          const users = await User.findAll({
            attributes: ['id', 'email'],
            where: { '$logins.name$': loginName, '$logins.key$': profile.id },
            include: [
              {
                attributes: ['name', 'key'],
                model: UserLogin,
                as: 'logins',
                required: true,
              },
            ],
          });
          if (users.length) {
            const user = users[0].get({ plain: true });
            done(null, user);
          } else {
            let user = await User.findOne({
              where: { email: profile._json.email },
            });
            if (user) {
              // There is already an account using this email address. Sign in to
              // that account and link it with Facebook manually from Account Settings.
              done(null);
            } else {
              user = await User.create(
                {
                  email: profile._json.email,
                  emailConfirmed: true,
                  logins: [{ name: loginName, key: profile.id }],
                  claims: [{ type: claimType, value: accessToken }],
                  profile: {
                    displayName: profile.displayName,
                    gender: profile._json.gender,
                    picture: `https://graph.facebook.com/${
                      profile.id
                    }/picture?type=large`,
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
              done(null, {
                id: user.id,
                email: user.email,
              });
            }
          }
        }
      };

      fooBar().catch(done);
    },
  ),
);

/**
 * Sign in with email and password
 */

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    const claims = await UserClaim.findAll({
      attributes: ['type', 'value'],
      where: {
        type: ['password', 'salt']
      },
      include: [
        {
          model: User,
          attributes: ['id'],
          as: 'user',
          required: true,
          where: { email },
        },
      ],
    });
  
    if (!claims) {
      done(null, false, { message: 'User not found!' });
      return;
    }
  
    // get password and salt from info
    const passwordInfo = {salt: '', password: ''};
    let userId = 0;
    claims.forEach(claim => {
      passwordInfo[claim.type] = claim.value;
      userId = claim.user.id;
    });
  
    if (!passwordInfo.password || !passwordInfo.salt) {
      done(null, false, { message: 'User info was missed, please contact the administrator' });
      return;
    }
  
    // hash and check password
    const { hashedPassword } = await hashPassword({password, salt: passwordInfo.salt});
  
    if (hashedPassword !== passwordInfo.password) {
      done(null, false, { message: 'Incorrect password' });
      return;
    }
  
    // success, get user info
    const userInfo = await User.findOne({
      attributes: ['id', 'email', 'emailConfirmed'],
      where: {id: userId},
      include: [
        { model: UserProfile, as: 'profile' },
      ],
    });
  
    // return user
    done(null, {
      id: userId,
      email: userInfo.email,
      emailConfirmed: userInfo.emailConfirmed,
      profile: {...userInfo.profile.dataValues},
    });
  } catch (error) {
    done(null, false, {message: 'Something went wrong, please try again!'});
  }
}
));

/**
 * serializeUser
 */

passport.serializeUser((user, done) => {
  done(null, user);
});

/**
 * deserializeUser
 */

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
