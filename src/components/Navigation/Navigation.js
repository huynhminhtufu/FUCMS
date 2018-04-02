/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

class Navigation extends React.Component {
  componentDidMount() {
    if (window.afterBodyShowed) window.afterBodyShowed();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-static ms-navbar ms-navbar-primary">
        <div className="container container-full">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              {/* <img src="assets/img/demo/logo-navbar.png" alt=""/> */}
              <span className="ms-logo ms-logo-sm">FU</span>
              <span className="ms-title">
                CMS
                <strong>Beta</strong>
              </span>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="ms-navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-name="page"
                >
                  E-Learning System
                  <i className="zmdi zmdi-chevron-down" />
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item" href="/">
                      Web Develop
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item" href="/">
                      Android Develop
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item" href="/">
                      iOS Develop
                    </a>
                  </li>
                </ul>
              </li>
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
            </ul>
          </div>
          <button className="ms-toggle-left btn-navbar-menu">
            <i className="zmdi zmdi-menu" />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navigation;
