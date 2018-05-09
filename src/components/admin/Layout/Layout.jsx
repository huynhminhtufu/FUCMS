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
import SlideBar from './SlideBar';
import RightSideBar from './RightSideBar';
import MainMenu from './MainMenu';

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

    const result = [];
    // result.push(<Header key="header" />);

    result.push(
      <div id="wrapper" key="mainLayout">
        
        <MainMenu /> 

        <SlideBar />
        
        <div id="page-wrapper">
            <div className="container-fluid">
                <div className="row bg-title">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Starter Page</h4>
                    </div>
                    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <a href="https://themeforest.net/item/elite-admin-responsive-dashboard-web-app-kit-/16750820" target="_blank" className="btn btn-danger pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light">Buy Now</a>
                        <ol className="breadcrumb">
                            <li><a href="#">Dashboard</a></li>
                            <li className="active">Starter Page</li>
                        </ol>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="white-box">
                            <h3 className="box-title">Blank Starter page</h3>

                            {this.props.children}
                        </div>
                    </div>
                </div>
                
                <RightSideBar />
            </div>
            <footer className="footer text-center"> 2017 &copy; Elite Admin brought to you by themedesigner.in </footer>
        </div>
        </div>
    );

    return result;
  }
}

export default connect(
  state => ({ notifications: state.notifications })
)(Layout);
