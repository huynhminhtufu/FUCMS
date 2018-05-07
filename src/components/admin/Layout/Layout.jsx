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
// import Feedback from '../Feedback';
// import Footer from '../Footer';
// import Navigation from '../Navigation';
// import LoginModal from '../LoginModal';
// import SlideBar from './SlideBar';

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
      <div id="wrapper">
        
        <nav className="navbar navbar-default navbar-static-top m-b-0">
            <div className="navbar-header"> <a className="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i className="ti-menu" /></a>
                <div className="top-left-part"><a className="logo" href="index.html"><b><img src="../plugins/images/eliteadmin-logo.png" alt="home"  /></b><span className="hidden-xs"><strong>elite</strong>university</span></a></div>
                <ul className="nav navbar-top-links navbar-left hidden-xs">
                    <li><a href="javascript:void(0)" className="open-close hidden-xs waves-effect waves-light"><i className="icon-arrow-left-circle ti-menu" /></a></li>
                    <li>
                        <form role="search" className="app-search hidden-xs">
                            <input type="text" placeholder="Search..." className="form-control"/>
                            <a href=""><i className="fa fa-search" /></a>
                        </form>
                    </li>
                </ul>
                <ul className="nav navbar-top-links navbar-right pull-right">
                    <li className="dropdown"> <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i className="icon-envelope" />
          <div className="notify"><span className="heartbit" /><span className="point" /></div>
          </a>
                        <ul className="dropdown-menu mailbox animated bounceInDown">
                            <li>
                                <div className="drop-title">You have 4 new messages</div>
                            </li>
                            <li>
                                <div className="message-center">
                                    <a href="#">
                                        <div className="user-img"> <img src="../plugins/images/users/pawandeep.jpg" alt="user" className="img-circle"  /> <span className="profile-status online pull-right" /> </div>
                                        <div className="mail-contnet">
                                            <h5>Pavan kumar</h5>
                                            <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                                    </a>
                                    <a href="#">
                                        <div className="user-img"> <img src="../plugins/images/users/sonu.jpg" alt="user" className="img-circle"  /> <span className="profile-status busy pull-right" /> </div>
                                        <div className="mail-contnet">
                                            <h5>Sonu Nigam</h5>
                                            <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                    </a>
                                    <a href="#">
                                        <div className="user-img"> <img src="../plugins/images/users/arijit.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right" /> </div>
                                        <div className="mail-contnet">
                                            <h5>Arijit Sinh</h5>
                                            <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                    </a>
                                    <a href="#">
                                        <div className="user-img"> <img src="../plugins/images/users/pawandeep.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                                        <div className="mail-contnet">
                                            <h5>Pavan kumar</h5>
                                            <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a className="text-center" href="javascript:void(0);"> <strong>See all notifications</strong> <i className="fa fa-angle-right" /> </a>
                            </li>
                        </ul>
                        
                    </li>
                    
                    <li className="dropdown"> <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i className="icon-note" />
          <div className="notify"><span className="heartbit" /><span className="point" /></div>
          </a>
                        <ul className="dropdown-menu dropdown-tasks animated slideInUp">
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 1</strong> <span className="pull-right text-muted">40% Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}> <span className="sr-only">40% Complete (success)</span> </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 2</strong> <span className="pull-right text-muted">20% Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}> <span className="sr-only">20% Complete</span> </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 3</strong> <span className="pull-right text-muted">60% Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}> <span className="sr-only">60% Complete (warning)</span> </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <a href="#">
                                    <div>
                                        <p> <strong>Task 4</strong> <span className="pull-right text-muted">80% Complete</span> </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}> <span className="sr-only">80% Complete (danger)</span> </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <a className="text-center" href="#"> <strong>See All Tasks</strong> <i className="fa fa-angle-right" /> </a>
                            </li>
                        </ul>
                        
                    </li>
                    
                    
                    <li className="mega-dropdown">
                        <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><span className="hidden-xs">Mega</span> <i className="icon-options-vertical" /></a>
                        <ul className="dropdown-menu mega-dropdown-menu animated bounceInDown">
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Forms Elements</li>
                                    <li><a href="form-basic.html">Basic Forms</a></li>
                                    <li><a href="form-layout.html">Form Layout</a></li>
                                    <li><a href="form-advanced.html">Form Addons</a></li>
                                    <li><a href="form-material-elements.html">Form Material</a></li>
                                    <li><a href="form-float-input.html">Form Float Input</a></li>
                                    <li><a href="form-upload.html">File Upload</a></li>
                                    <li><a href="form-mask.html">Form Mask</a></li>
                                    <li><a href="form-img-cropper.html">Image Cropping</a></li>
                                    <li><a href="form-validation.html">Form Validation</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Advance Forms</li>
                                    <li><a href="form-dropzone.html">File Dropzone</a></li>
                                    <li><a href="form-pickers.html">Form-pickers</a></li>
                                    <li><a href="icheck-control.html">Icheck Form Controls</a></li>
                                    <li><a href="form-wizard.html">Form-wizards</a></li>
                                    <li><a href="form-typehead.html">Typehead</a></li>
                                    <li><a href="form-xeditable.html">X-editable</a></li>
                                    <li><a href="form-summernote.html">Summernote</a></li>
                                    <li><a href="form-bootstrap-wysihtml5.html">Bootstrap wysihtml5</a></li>
                                    <li><a href="form-tinymce-wysihtml5.html">Tinymce wysihtml5</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Table Example</li>
                                    <li><a href="basic-table.html">Basic Tables</a></li>
                                    <li><a href="table-layouts.html">Table Layouts</a></li>
                                    <li><a href="data-table.html">Data Table</a></li>
                                    <li className="hidden"><a href="crud-table.html">Crud Table</a></li>
                                    <li><a href="bootstrap-tables.html">Bootstrap Tables</a></li>
                                    <li><a href="responsive-tables.html">Responsive Tables</a></li>
                                    <li><a href="editable-tables.html">Editable Tables</a></li>
                                    <li><a href="foo-tables.html">FooTables</a></li>
                                    <li><a href="jsgrid.html">JsGrid Tables</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-3">
                                <ul>
                                    <li className="dropdown-header">Charts</li>
                                    <li> <a href="flot.html">Flot Charts</a> </li>
                                    <li><a href="morris-chart.html">Morris Chart</a></li>
                                    <li><a href="chart-js.html">Chart-js</a></li>
                                    <li><a href="peity-chart.html">Peity Charts</a></li>
                                    <li><a href="knob-chart.html">Knob Charts</a></li>
                                    <li><a href="sparkline-chart.html">Sparkline charts</a></li>
                                    <li><a href="extra-charts.html">Extra Charts</a></li>
                                </ul>
                            </li>
                            <li className="col-sm-12 m-t-40 demo-box">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-purple"><a href="../eliteadmin-inverse/index.html" target="_blank" className="text-white"><i className="linea-icon linea-basic fa-fw" data-icon="v" /><br/>Demo 1</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-success"><a href="../eliteadmin/index.html" target="_blank" className="text-white"><i className="linea-icon linea-basic fa-fw" data-icon="v" /><br/>Demo 2</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-info"><a href="../eliteadmin-ecommerce/index.html" target="_blank" className="text-white"><i className="linea-icon linea-basic fa-fw" data-icon="v" /><br/>Demo 3</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-inverse"><a href="../eliteadmin-horizontal-navbar/index3.html" target="_blank" className="text-white"><i className="linea-icon linea-basic fa-fw" data-icon="v" /><br/>Demo 4</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-warning"><a href="../eliteadmin-iconbar/index4.html" target="_blank" className="text-white"><i className="linea-icon linea-basic fa-fw" data-icon="v" /><br/>Demo 5</a></div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="white-box text-center bg-danger"><a href="https://themeforest.net/item/elite-admin-responsive-web-app-kit-/16750820" target="_blank" className="text-white"><i className="linea-icon linea-ecommerce fa-fw" data-icon="d" /><br/>Buy Now</a></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="right-side-toggle"> <a className="waves-effect waves-light" href="javascript:void(0)"><i className="ti-settings" /></a></li>
                    
                </ul>
            </div>
            
            
            
        </nav>
        
        
        <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse slimscrollsidebar">
                <ul className="nav" id="side-menu">
                    <li className="sidebar-search hidden-sm hidden-md hidden-lg">
                        
                        <div className="input-group custom-search-form">
                            <input type="text" className="form-control" placeholder="Search..."/> <span className="input-group-btn">
                            <button className="btn btn-default" type="button"> <i className="fa fa-search" /> </button>
                            </span> </div>
                        
                    </li>
                    <li className="user-pro">
                        <a href="#" className="waves-effect"><img src="../plugins/images/users/1.jpg" alt="user-img" className="img-circle" /> <span className="hide-menu">Prof. Steve Gection
                <span className="fa arrow" /></span>
                        </a>
                        <ul className="nav nav-second-level">
                            <li><a href="javascript:void(0)"><i className="ti-user" /> My Profile</a></li>
                            <li><a href="javascript:void(0)"><i className="ti-email" /> Inbox</a></li>
                            <li><a href="javascript:void(0)"><i className="ti-settings" /> Account Setting</a></li>
                            <li><a href="login.html"><i className="fa fa-power-off" /> Logout</a></li>
                        </ul>
                    </li>
                    <li className="nav-small-cap m-t-10">--- Main Menu</li>
                    <li> <a href="index.html" className="waves-effect"><i className="linea-icon linea-basic fa-fw" data-icon="v" /> <span className="hide-menu"> Dashboard </span></a></li>
                    <li> <a href="javascript:void(0);" className="waves-effect"><i className="linea-icon linea-basic fa-fw text-danger" data-icon="7" /> <span className="hide-menu text-danger"> Multipurpose <span className="fa arrow" /> <span className="label label-rouded label-danger pull-right">HOT</span></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="../eliteadmin-hospital/index.html">Hospital Admin</a> </li>
                            <li> <a href="../eliteadmin-university/index.html">University Admin</a> </li>
                            <li> <a href="../eliteadmin-music/index.html">Music Admin</a> </li>
                            <li> <a href="../eliteadmin-real-estate/index.html">Real Estate Admin</a> </li>
                            <li role="separator" className="divider" />
                            <li> <a href="../eliteadmin-inverse/index.html">Inverse</a></li>
                            <li> <a href="../eliteadmin-colors/index.html">Colors</a></li>
                            <li> <a href="../eliteadmin/index.html">Eliteadmin</a></li>
                            <li> <a href="../eliteadmin-wpmenu/index.html">Wpmenu</a></li>
                            <li> <a href="../eliteadmin-ecommerce/index.html">Ecommerce</a></li>
                            <li> <a href="../eliteadmin-modern/index.html">Modern</a></li>
                            <li> <a href="../eliteadmin-inverse-php/index.php">Basic PHP</a></li>
                            <li> <a href="../eliteadmin-material/index3.html">Material Design</a></li>
                            <li> <a href="../eliteadmin-dark/index.html">Dark</a></li>
                            <li> <a href="../eliteadmin-mini-sidebar/index3.html">Mini Sidebar</a></li>
                            <li> <a href="../eliteadmin-horizontal-navbar/index3.html">Horizontal Boxed Nav</a></li>
                            <li> <a href="../eliteadmin-horizontal-nav-fullwidth/index.html">Horizontal Full Nav</a></li>
                            <li> <a href="../eliteadmin-iconbar/index4.html">Iconbar</a></li>
                            <li> <a href="../eliteadmin-rtl/index.html">Eliteadmin RTL</a></li>
                            <li> <a href="../eliteadmin-inverse-rtl/index.html">Inverse RTL</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="waves-effect"><i data-icon=")" className="linea-icon linea-basic fa-fw" /> <span className="hide-menu">Mailbox<span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="inbox.html">Inbox</a></li>
                            <li> <a href="inbox-detail.html">Inbox detail</a></li>
                            <li> <a href="compose.html">Compose mail</a></li>
                        </ul>
                    </li>
                    <li className="nav-small-cap">--- Proffessional</li>
                    <li> <a href="events.html" className="waves-effect"><i className="ti-calendar p-r-10" /> <span className="hide-menu">Events</span></a> </li>
                    <li> <a href="javascript:void(0);" className="waves-effect"><i className="icon-people p-r-10" /> <span className="hide-menu"> Professors <span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="professors.html">All Professors</a> </li>
                            <li> <a href="add-professor.html">Add Professor</a> </li>
                            <li> <a href="edit-professor.html">Edit Professor</a> </li>
                            <li> <a href="professor-profile.html">Professor Profile</a> </li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-graduation-cap p-r-10" /> <span className="hide-menu"> Students <span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="students.html">All Students</a> </li>
                            <li> <a href="add-student.html">Add Student</a> </li>
                            <li> <a href="edit-student.html">Edit Student</a> </li>
                            <li> <a href="student-profile.html">Student Profile</a> </li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-bars p-r-10" /> <span className="hide-menu"> Courses <span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="courses.html">All Courses</a> </li>
                            <li> <a href="add-course.html">Add Course</a> </li>
                            <li> <a href="edit-course.html">Edit Course</a> </li>
                            <li> <a href="course-info.html">Course Information</a> </li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-book p-r-10" /> <span className="hide-menu"> Library <span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="library-assets.html">Library Assets</a></li>
                            <li> <a href="add-asset.html">Add Library Asset</a></li>
                            <li> <a href="edit-asset.html">Edit Library Asset</a></li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="waves-effect"><i className="fa fa-building p-r-10" /> <span className="hide-menu"> Department <span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="departments.html">Departments</a></li>
                            <li> <a href="add-department.html">Add Department</a></li>
                            <li> <a href="edit-department.html">Edit Department</a></li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="waves-effect"><i className="icon-chart p-r-10" /> <span className="hide-menu"> Reports <span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="general-report.html">General Report</a></li>
                            <li> <a href="income-report.html">Income Report</a></li>
                            <li> <a href="expense-report.html">Expense Report</a></li>
                        </ul>
                    </li>
                    <li> <a href="widgets.html" className="waves-effect"><i data-icon="P" className="linea-icon linea-basic fa-fw" /> <span className="hide-menu">Widgets</span></a> </li>
                    <li> <a href="#" className="waves-effect"><i data-icon="7" className="linea-icon linea-basic fa-fw" /> <span className="hide-menu">Icons<span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="fontawesome.html">Font awesome</a> </li>
                            <li> <a href="themifyicon.html">Themify Icons</a> </li>
                            <li> <a href="simple-line.html">Simple line Icons</a> </li>
                            <li><a href="linea-icon.html">Linea Icons</a></li>
                            <li><a href="weather.html">Weather Icons</a></li>
                        </ul>
                    </li>
                    <li className="nav-small-cap">--- Extra Components</li>
                    <li> <a href="#" className="waves-effect"><i data-icon="/" className="linea-icon linea-basic fa-fw" /> <span className="hide-menu">UI Elements<span className="fa arrow" /> <span className="label label-rouded label-info pull-right">13</span> </span></a>
                        <ul className="nav nav-second-level">
                            <li><a href="cards.html">Cards</a></li>
                            <li><a href="panels-wells.html">Panels and Wells</a></li>
                            <li><a href="panel-ui-block.html">Panels With BlockUI</a></li>
                            <li><a href="panel-draggable.html">Draggable Panel</a></li>
                            <li><a href="portlet-draggable.html">Draggable Portlet</a></li>
                            <li><a href="buttons.html">Buttons</a></li>
                            <li><a href="bootstrap-switch.html">Bootstrap Switch</a></li>
                            <li><a href="date-paginator.html">Date Paginator</a></li>
                            <li><a href="sweatalert.html">Sweat alert</a></li>
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="tabs.html">Tabs</a></li>
                            <li><a href="tab-stylish.html">Stylish Tabs</a></li>
                            <li><a href="modals.html">Modals</a></li>
                            <li><a href="progressbars.html">Progress Bars</a></li>
                            <li><a href="notification.html">Notifications</a></li>
                            <li><a href="carousel.html">Carousel</a></li>
                            <li><a href="list-style.html">List & Media object</a></li>
                            <li><a href="user-cards.html">User Cards</a></li>
                            <li><a href="timeline.html">Timeline</a></li>
                            <li><a href="timeline-horizontal.html">Horizontal Timeline</a></li>
                            <li><a href="nestable.html">Nesteble</a></li>
                            <li><a href="range-slider.html">Range Slider</a></li>
                            <li><a href="ribbons.html">Ribbons</a></li>
                            <li><a href="steps.html">Steps</a></li>
                            <li><a href="session-idle-timeout.html">Session Idle Timeout</a></li>
                            <li><a href="session-timeout.html">Session Timeout</a></li>
                            <li><a href="tooltip-stylish.html">Stylish Tooltip</a></li>
                            <li><a href="bootstrap.html">Bootstrap UI</a></li>
                        </ul>
                    </li>
                    <li> <a href="#" className="waves-effect active"><i data-icon="&#xe008;" className="linea-icon linea-basic fa-fw" /> <span className="hide-menu">Sample Pages<span className="fa arrow" /><span className="label label-rouded label-purple pull-right">30</span></span></a>
                        <ul className="nav nav-second-level">
                            <li><a href="starter-page.html">Starter Page</a></li>
                            <li><a href="blank.html">Blank Page</a></li>
                            <li><a href="javascript:void(0)" className="waves-effect">Email Templates
                        <span className="fa arrow" /></a>
                                <ul className="nav nav-third-level">
                                    <li><a href="../email-templates/basic.html">Basic</a></li>
                                    <li><a href="../email-templates/alert.html">Alert</a></li>
                                    <li><a href="../email-templates/billing.html">Billing</a></li>
                                    <li><a href="../email-templates/password-reset.html">Reset Pwd</a></li>
                                </ul>
                            </li>
                            <li><a href="lightbox.html">Lightbox Popup</a></li>
                            <li><a href="treeview.html">Treeview</a></li>
                            <li><a href="search-result.html">Search Result</a></li>
                            <li><a href="utility-classes.html">Utility Classes</a></li>
                            <li><a href="custom-scroll.html">Custom Scrolls</a></li>
                            <li><a href="login.html">Login Page</a></li>
                            <li><a href="login2.html">Login v2</a></li>
                            <li><a href="animation.html">Animations</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="register2.html">Register v2</a></li>
                            <li><a href="register3.html">3 Step Registration</a></li>
                            <li><a href="recoverpw.html">Recover Password</a></li>
                            <li><a href="lock-screen.html">Lock Screen</a></li>
                            <li><a href="400.html">Error 400</a></li>
                            <li><a href="403.html">Error 403</a></li>
                            <li><a href="404.html">Error 404</a></li>
                            <li><a href="500.html">Error 500</a></li>
                            <li><a href="503.html">Error 503</a></li>
                        </ul>
                    </li>
                    <li> <a href="forms.html" className="waves-effect"><i data-icon="&#xe00b;" className="linea-icon linea-basic fa-fw" /> <span className="hide-menu">Forms<span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li><a href="form-basic.html">Basic Forms</a></li>
                            <li><a href="form-layout.html">Form Layout</a></li>
                            <li><a href="form-advanced.html">Form Addons</a></li>
                            <li><a href="form-material-elements.html">Form Material</a></li>
                            <li><a href="form-float-input.html">Form Float Input</a></li>
                            <li><a href="form-upload.html">File Upload</a></li>
                            <li><a href="form-mask.html">Form Mask</a></li>
                            <li><a href="form-img-cropper.html">Image Cropping</a></li>
                            <li><a href="form-validation.html">Form Validation</a></li>
                            <li><a href="form-dropzone.html">File Dropzone</a></li>
                            <li><a href="form-pickers.html">Form-pickers</a></li>
                            <li><a href="icheck-control.html">Icheck Form Controls</a></li>
                            <li><a href="form-wizard.html">Form-wizards</a></li>
                            <li><a href="form-typehead.html">Typehead</a></li>
                            <li><a href="form-xeditable.html">X-editable</a></li>
                            <li><a href="form-summernote.html">Summernote</a></li>
                            <li><a href="form-bootstrap-wysihtml5.html">Bootstrap wysihtml5</a></li>
                            <li><a href="form-tinymce-wysihtml5.html">Tinymce wysihtml5</a></li>
                        </ul>
                    </li>
                    <li> <a href="tables.html" className="waves-effect"><i data-icon="O" className="linea-icon linea-software fa-fw" /> <span className="hide-menu">Tables<span className="fa arrow" /><span className="label label-rouded label-danger pull-right">7</span></span></a>
                        <ul className="nav nav-second-level">
                            <li><a href="basic-table.html">Basic Tables</a></li>
                            <li><a href="table-layouts.html">Table Layouts</a></li>
                            <li><a href="data-table.html">Data Table</a></li>
                            <li className="hidden"><a href="crud-table.html">Crud Table</a></li>
                            <li><a href="bootstrap-tables.html">Bootstrap Tables</a></li>
                            <li><a href="responsive-tables.html">Responsive Tables</a></li>
                            <li><a href="editable-tables.html">Editable Tables</a></li>
                            <li><a href="foo-tables.html">FooTables</a></li>
                            <li><a href="jsgrid.html">JsGrid Tables</a></li>
                        </ul>
                    </li>
                    <li className="nav-small-cap">--- Support</li>
                    <li> <a href="javascript:void(0)" className="waves-effect"><i data-icon="F" className="linea-icon linea-software fa-fw" /> <span className="hide-menu">Multi-Level Dropdown<span className="fa arrow" /></span></a>
                        <ul className="nav nav-second-level">
                            <li> <a href="javascript:void(0)">Second Level Item</a> </li>
                            <li> <a href="javascript:void(0)">Second Level Item</a> </li>
                            <li> <a href="javascript:void(0)" className="waves-effect">Third Level <span className="fa arrow" /></a>
                                <ul className="nav nav-third-level">
                                    <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                                    <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                                    <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                                    <li> <a href="javascript:void(0)">Third Level Item</a> </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="login.html" className="waves-effect"><i className="icon-logout fa-fw" /> <span className="hide-menu">Log out</span></a></li>
                    <li className="hide-menu">
                        <a href="javacript:void(0);">
                            <span>Progress Report</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}} role="progressbar"> <span className="sr-only">85% Complete (success)</span> </div>
                            </div>
                            <span>Student Report</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-danger" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}} role="progressbar"> <span className="sr-only">85% Complete (success)</span> </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        
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
                
                <div className="right-sidebar">
                    <div className="slimscrollright">
                        <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
                        <div className="r-panel-body">
                            <ul>
                                <li><b>Layout Options</b></li>
                                <li>
                                    <div className="checkbox checkbox-info">
                                        <input id="checkbox1" type="checkbox" className="fxhdr"/>
                                        <label htmlFor="checkbox1"> Fix Header </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox checkbox-warning">
                                        <input id="checkbox2" type="checkbox" checked="" className="fxsdr"/>
                                        <label htmlFor="checkbox2"> Fix Sidebar </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkbox checkbox-success">
                                        <input id="checkbox4" type="checkbox" className="open-close"/>
                                        <label htmlFor="checkbox4"> Toggle Sidebar </label>
                                    </div>
                                </li>
                            </ul>
                            <ul id="themecolors" className="m-t-20">
                                <li><b>With Light sidebar</b></li>
                                <li><a href="javascript:void(0)" theme="default" className="default-theme">1</a></li>
                                <li><a href="javascript:void(0)" theme="green" className="green-theme">2</a></li>
                                <li><a href="javascript:void(0)" theme="gray" className="yellow-theme">3</a></li>
                                <li><a href="javascript:void(0)" theme="blue" className="blue-theme working">4</a></li>
                                <li><a href="javascript:void(0)" theme="purple" className="purple-theme">5</a></li>
                                <li><a href="javascript:void(0)" theme="megna" className="megna-theme">6</a></li>
                                <li><b>With Dark sidebar</b></li>
                                <br/>
                                <li><a href="javascript:void(0)" theme="default-dark" className="default-dark-theme">7</a></li>
                                <li><a href="javascript:void(0)" theme="green-dark" className="green-dark-theme">8</a></li>
                                <li><a href="javascript:void(0)" theme="gray-dark" className="yellow-dark-theme">9</a></li>
                                <li><a href="javascript:void(0)" theme="blue-dark" className="blue-dark-theme">10</a></li>
                                <li><a href="javascript:void(0)" theme="purple-dark" className="purple-dark-theme">11</a></li>
                                <li><a href="javascript:void(0)" theme="megna-dark" className="megna-dark-theme">12</a></li>
                            </ul>
                            <ul className="m-t-20 all-demos">
                                <li><b>Choose other demos</b></li>
                            </ul>
                            <ul className="m-t-20 chatonline">
                                <li><b>Chat option</b></li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/varun.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/genu.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/ritesh.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/arijit.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/govinda.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/hritik.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/john.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><img src="../plugins/images/users/pawandeep.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
