/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-static ms-navbar ms-navbar-primary">
        <div className="container container-full">
          <div className="navbar-header">
            <a className="navbar-brand" href="index-2.html">
              {/* <!-- <img src="assets/img/demo/logo-navbar.png" alt=""> --> */}
              <span className="ms-logo ms-logo-sm">FU</span>
              <span className="ms-title">FU
              <strong>Team</strong>
              </span>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="ms-navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log in
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
          <a href="javascript:void(0)" className="ms-toggle-left btn-navbar-menu">
            <i className="zmdi zmdi-menu"></i>
          </a>
        </div>
      </nav>
        );
  }
}

export default Navigation;
