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
import Notifications from 'react-notification-system-redux';

// external-global styles must be imported in your JS.
// import normalizeCss from 'normalize.css';
// import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Navigation from '../Navigation';
import LoginModal from './LoginModal';
import SlideBar from './SlideBar';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.object,
    notifications: PropTypes.array,
  };

  static contextTypes = {
    store: PropTypes.object
  };

  static defaultProps = {
    options: {
      isShowHeader: true,
      isShowNavbar: true,
      isShowFooter: true
    }
  };

  render() {
    // Notification System
    const { notifications } = this.props;
    // Option style
    const style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10px 5px 2px 1px'
        },

        success: { // Applied only to the success notification item
          color: 'red'
        }
      }
    };

    const { isShowHeader, isShowNavbar, isShowFooter } = this.props.options;
    return (
      <div>
        {isShowHeader && <LoginModal />}
        {isShowHeader && <SlideBar />}
        <div className="ms-site-container">
          {isShowHeader && <Header />}
          {isShowNavbar && <Navigation />}
          {this.props.children}
          {isShowFooter && <Feedback />}
          {isShowFooter && <Footer />}
        </div>
        <Notifications
          notifications={notifications}
          style={style}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ notifications: state.notifications })
)(Layout);
