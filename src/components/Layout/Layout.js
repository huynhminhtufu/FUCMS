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

// external-global styles must be imported in your JS.
// import normalizeCss from 'normalize.css';
// import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Link from '../Link';
import Navigation from '../Navigation';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    options: {
      isShowHeader: true,
      isShowNavbar: true,
      isShowFooter: true
    }
  };

  render() {
    const { isShowHeader, isShowNavbar, isShowFooter } = this.props.options;
    return (
      <div>
        {isShowHeader && <Header />}
        {isShowNavbar && <Navigation />}
        {this.props.children}
        {isShowFooter && <Feedback />}
        {isShowFooter && <Footer />}
      </div>
    );
  }
}

export default Layout;
