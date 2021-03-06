/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../../components/Link';

class Login extends React.Component {
  render() {
    return (
      <div className="bg-full-page bg-primary back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card color-dark animated zoomInDown animation-delay-5">
            <div className="card-body">
              <h1 className="color-primary">Login</h1>
              <form>
                <fieldset>
                  <div className="form-group label-floating is-empty">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-account" />
                      </span>
                      <label className="control-label" htmlFor="ms-form-user">Username</label>
                      <input type="text" id="ms-form-user" className="form-control" autoFocus /> </div>
                  </div>
                  <div className="form-group label-floating is-empty">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-lock" />
                      </span>
                      <label className="control-label" htmlFor="ms-form-pass">Password</label>
                      <input type="password" id="ms-form-pass" className="form-control" /> </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6">
                      <button className="btn btn-raised btn-primary btn-block">Login
                    <i className="zmdi zmdi-long-arrow-right no-mr ml-1" />
                      </button>
                    </div>
                    <div className="col-md-6">
                      <Link href="/register" className="btn btn-primary btn-block">
                        <i className="zmdi zmdi-account-add mr-1" /> Sign Up</Link>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="text-center">
                <h3 className="color-dark">Login with</h3>
                <a href="/login/facebook" className="wave-effect-light btn btn-raised btn-facebook">
                  <i className="zmdi zmdi-facebook" /> Facebook</a>
                <a href="/login/twitter" className="wave-effect-light btn btn-raised btn-twitter">
                  <i className="zmdi zmdi-twitter" /> Twitter</a>
                <a href="/login/google" className="wave-effect-light btn btn-raised btn-google">
                  <i className="zmdi zmdi-google" /> Google</a>
              </div>
            </div>
          </div>
          <div className="text-center animated fadeInUp animation-delay-7">
            <Link href="/" className="btn btn-white">
              <i className="zmdi zmdi-home" /> Go Home</Link>
            <Link href="/" className="btn btn-white">
              <i className="zmdi zmdi-key" /> Recovery Pass</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
