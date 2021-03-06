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

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    const { title, html } = this.props;
    return (
      <div className="container">
        <div className="card card-hero mt-2">
          <div className="card-body">
            <h2 className="color-primary">{title}</h2>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
