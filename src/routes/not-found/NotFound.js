/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className="bg-full-page bg-primary back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card animated zoomInUp animation-delay-7 color-primary withripple">
            <div className="card-body">
              <div className="text-center color-dark">
                <h1 className="color-primary text-big">Error 404</h1>
                <h2>Page Not Found</h2>
                <p className="lead lead-sm">
                  We have not found what you are looking for.
                  <br />We have put our robots to search.
                </p>
                <a href="/" className="btn btn-primary btn-raised">
                  <i className="zmdi zmdi-home" /> Go Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
