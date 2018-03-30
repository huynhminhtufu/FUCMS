/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.css';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <form method="post">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="displayName">
                Your name:
                <input
                  className={s.input}
                  id="displayName"
                  type="text"
                  name="displayName"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  required
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="email">
                Email address:
                <input
                  className={s.input}
                  id="email"
                  type="text"
                  name="email"
                  required
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
                <input
                  className={s.input}
                  id="password"
                  type="password"
                  name="password"
                  required
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="button">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
