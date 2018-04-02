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

class ErrorPage extends React.Component {
  static propTypes = {
    error: PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    error: null,
  };

  render() {
    if (__DEV__ && this.props.error) {
      return (
        <div className="bg-full-page bg-danger back-fixed">
          <div className="mw-800 absolute-center">
            <div className="card animated zoomInUp animation-delay-7 color-primary withripple">
              <div className="card-body">
                <div className="text-center color-dark">
                  <h1 className="color-danger text-big">
                    {this.props.error.name}
                  </h1>
                  <h2>Something Went Wrong</h2>
                  <p className="lead lead-sm">
                    {this.props.error.stack}
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

    return (
      <div className="bg-full-page bg-danger back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card animated zoomInUp animation-delay-7 color-primary withripple">
            <div className="card-body">
              <div className="text-center color-dark">
                <h1 className="color-danger text-big">Oops... Error!</h1>
                <h2>Something Went Wrong</h2>
                <p className="lead lead-sm">
                  Sorry, a critical error occurred on this page.
                  <br />Please reload this page or return to homepage.
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

export { ErrorPage as ErrorPageWithoutStyle };
export default ErrorPage;
