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
import { connect } from 'react-redux';
import { success, error } from 'react-notification-system-redux';
import Link from '../../components/Link';
import validate from '../../helpers/validate';
import history from '../../history';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
  };

  static contextTypes = {
    fetch: PropTypes.func.isRequired,
    fetchApi: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: {
          validates: {
            required: true
          },
          // maxLength: {}
        },
        username: {
          validates: {
            required: true
          },
        },
        password: {
          validates: {
            required: true
          },
        },
        email: {
          validates: {
            required: true
          },
        },
      },
    };
  }

  shouldComponentUpdate() {
    if (this.needUpdate) {
      delete this.needUpdate;
      return true;
    }

    return false;
  }

  onFieldChange(evt) {
    const { fields } = this.state;
    const element = evt.target;
    const { name, value } = element;

    // get field and set field value
    const field = fields[name];
    field.value = value;

    // validate and set field, needUpdate
    const { field: validatedField, needUpdate } = validate(field);
    fields[name] = validatedField;
    this.needUpdate = needUpdate;

    // error catch:
    // field[fieldName].error = element of field.validates
    this.setState({
      fields,
    });
  }

  async handleSignUp() {
    const { dispatch } = this.props;

    const { fields } = this.state;
    const { fetchApi } = this.context;
    const data = {};
    Object.keys(fields).forEach(fieldName => {
      data[fieldName] = fields[fieldName].value;
    });

    const query = `mutation
    {
      addUser(
        name: "${data.name}",
        email: "${data.email}",
        username: "${data.username}",
        password: "${data.password}"
      ) {
        id,
        email
      }
    }`;

    const result = await fetchApi({ query });
    if (result.data.addUser) {
      // success handle
      dispatch(
        success({
          title: 'Sign up successfully!',
          message: `Please do email confirmation at ${result.data.addUser.email}.`,
          position: 'tc',
          autoDismiss: 5,
        })
      );
      history.push("/");
    } else {
      // fail handle
      dispatch(
        error({
          title: 'Error!',
          message: `Please enter below fields to sign up.`,
          position: 'tc',
          autoDismiss: 0,
        })
      );
    }
  }

  render() {
    const { title } = this.props;

    return (
      <div className="bg-full-page bg-primary back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card color-dark animated zoomInDown animation-delay-5">
            <div className="card-body">
              <h1 className="color-primary">{title}</h1>
              <form onSubmit={e => this.onFieldChange(e)} noValidate>
                <fieldset>
                  <div className="form-group label-floating is-empty">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-card" />
                      </span>
                      <input
                        type="text"
                        id="ms-form-name"
                        className="form-control"
                        name="name"
                        autoFocus
                        required
                        onChange={e => this.onFieldChange(e)}
                      />
                      <label className="control-label" htmlFor="ms-form-name">
                        Full name
                      </label>
                    </div>
                  </div>
                  <div className="form-group label-floating is-empty">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-email" />
                      </span>
                      <label className="control-label" htmlFor="ms-form-user">
                        Email
                      </label>
                      <input
                        type="email"
                        id="ms-form-email"
                        className="form-control"
                        name="email"
                        onChange={e => this.onFieldChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group label-floating is-empty">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-account" />
                      </span>
                      <label className="control-label" htmlFor="ms-form-user">
                        Username
                      </label>
                      <input
                        type="text"
                        id="ms-form-user"
                        className="form-control"
                        name="username"
                        onChange={e => this.onFieldChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group label-floating is-empty">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-lock" />
                      </span>
                      <label className="control-label" htmlFor="ms-form-pass">
                        Password
                      </label>
                      <input
                        type="password"
                        id="ms-form-pass"
                        className="form-control"
                        name="password"
                        onChange={e => this.onFieldChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <button
                        onClick={e => {
                          e.preventDefault();
                          this.handleSignUp();
                        }}
                        className="btn btn-raised btn-primary btn-block"
                      >
                        <i className="zmdi zmdi-account-add mr-1" /> Sign up
                      </button>
                    </div>
                    <div className="col-md-6">
                      <Link href="/login" className="btn btn-primary btn-block">
                        Login
                        <i className="zmdi zmdi-long-arrow-right no-mr ml-1" />
                      </Link>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="text-center">
                <h3 className="color-dark">Login with</h3>
                <a
                  href="/login/facebook"
                  className="wave-effect-light btn btn-raised btn-facebook"
                >
                  <i className="zmdi zmdi-facebook" />Facebook
                </a>
                <a
                  href="/login/twitter"
                  className="wave-effect-light btn btn-raised btn-twitter"
                >
                  <i className="zmdi zmdi-twitter" /> Twitter
                </a>
                <a
                  href="/login/google"
                  className="wave-effect-light btn btn-raised btn-google"
                >
                  <i className="zmdi zmdi-google" /> Google
                </a>
              </div>
            </div>
          </div>
          <div className="text-center animated fadeInUp animation-delay-7">
            <Link href="/" className="btn btn-white">
              <i className="zmdi zmdi-home" /> Go Home
            </Link>
            <Link href="/" className="btn btn-white">
              <i className="zmdi zmdi-key" /> Recovery Pass
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
