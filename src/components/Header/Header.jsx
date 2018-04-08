/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Header.css';
import Link from '../Link';
// import Navigation from '../Navigation';
import AccountInfo from './AccountInfo';

class Header extends React.Component {
  render() {
    return (
      <header className="ms-header ms-header-primary">
        <div className="container container-full">
          <div className="ms-title">
            <Link href="/">
              <span className="ms-logo">
                FU
              </span>
              <h1>
                CMS
                <span>Beta</span>
              </h1>
            </Link>
          </div>
          <div className="header-right">
            <div className="share-menu">
              <ul className="share-menu-list">
                <li className="animated fadeInRight animation-delay-3">
                  <button className="btn-circle btn-google">
                    <i className="zmdi zmdi-google" />
                  </button>
                </li>
                <li className="animated fadeInRight animation-delay-2">
                  <button
                    className="btn-circle btn-facebook"
                  >
                    <i className="zmdi zmdi-facebook" />
                  </button>
                </li>
                <li className="animated fadeInRight animation-delay-1">
                  <button
                    className="btn-circle btn-twitter"
                  >
                    <i className="zmdi zmdi-twitter" />
                  </button>
                </li>
              </ul>
              <button className="btn-circle btn-circle-primary animated zoomInDown animation-delay-7">
                <i className="zmdi zmdi-share" />
              </button>
            </div>
            <AccountInfo />
            <form className="search-form animated zoomInDown animation-delay-9">
              <input
                id="search-box"
                type="text"
                className="search-input"
                placeholder="Search..."
                name="q"
              />
              <label htmlFor="search-box">
                <i className="zmdi zmdi-search" />
              </label>
            </form>
            <button className="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10 d-none d-sm-block d-md-none">
              <i className="zmdi zmdi-menu" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
