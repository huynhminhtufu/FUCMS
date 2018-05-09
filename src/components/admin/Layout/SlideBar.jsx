import React, { Component } from 'react';
import Link from '../../Link';

class Slidebar extends Component {
  componentDidMount() {
    $("#side-menu").metisMenu();
  }

  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse slimscrollsidebar">
          <ul className="nav" id="side-menu">
            <li className="sidebar-search hidden-sm hidden-md hidden-lg">

              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." /> <span className="input-group-btn">
                  <button className="btn btn-default" type="button"> <i className="fa fa-search" /> </button>
                </span> </div>

            </li>
            <li className="user-pro">
              <a href="#" className="waves-effect"><img src="/tile.png" alt="user-img" className="img-circle" /> <span className="hide-menu">Prof. Steve Gection
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
            <li>
              <a href="javascript:void(0);" className="waves-effect"><i class="fa fa-pencil fa-fw" /> <span className="hide-menu">Post<span className="fa arrow" /></span></a>
              <ul className="nav nav-second-level">
                <li> <Link href="inbox/">All Posts</Link></li>
                <li> <Link href="new-post/">New category</Link></li>
                <li> <Link href="category/">Category</Link></li>
                <li> <Link href="new-category/">New Category</Link></li>
              </ul>
            </li>
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
            <li><Link href="/logout" className="waves-effect"><i className="icon-logout fa-fw" /> <span className="hide-menu">Log out</span></Link></li>
            <li className="hide-menu">
              <a href="javacript:void(0);">
                <span>Progress Report</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-info" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }} role="progressbar"> <span className="sr-only">85% Complete (success)</span> </div>
                </div>
                <span>Student Report</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-danger" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }} role="progressbar"> <span className="sr-only">85% Complete (success)</span> </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Slidebar;
