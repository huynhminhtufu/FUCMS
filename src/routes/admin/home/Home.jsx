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

class Home extends React.Component {

  static propTypes = {
  };

  static contextTypes = {
    isServer: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    // List RSS size

    return (
      <div>
        <h1>ECMS ADMIN DASHBOARD</h1>
      </div>
    );
  }
}

export default Home;
