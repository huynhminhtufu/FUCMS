import React, { Component } from 'react';
import Link from '../../Link';

class RightSideBar extends Component {
  componentDidMount() {

    const body = $('body');

    $(".right-side-toggle").on("click", function () {
      $(".right-sidebar").slideDown(50).toggleClass("shw-rside");
      $(".fxhdr").on("click", function () {
        body.toggleClass("fix-header"); /* Fix Header JS */
      });
      // $(".fxsdr").on("click", function () {
      //   body.toggleClass("fix-sidebar"); /* Fix Sidebar JS */
      // });

      /* ===== Service Panel JS ===== */

      const fxhdr = $('.fxhdr');
      const fxsdr = $('.fxsdr');
      if (body.hasClass("fix-header")) {
        fxhdr.attr('checked', true);
      } else {
        fxhdr.attr('checked', false);
      }
      if (body.hasClass("fix-sidebar")) {
        fxsdr.attr('checked', true);
      } else {
        fxsdr.attr('checked', false);
      }
    });

    $('.slimscrollright').slimScroll({
      height: '100%',
      position: 'right',
      size: "5px",
      color: '#dcdcdc'
    });
    $('.slimscrollsidebar').slimScroll({
      height: '100%',
      position: 'right',
      size: "0px",
      color: '#dcdcdc'
    });
    $('.chat-list').slimScroll({
      height: '100%',
      position: 'right',
      size: "0px",
      color: '#dcdcdc'
    });
  }

  render() {
    return (
      <div className="right-sidebar">
        <div className="slimscrollright">
          <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
          <div className="r-panel-body">
            <ul>
              <li><b>Layout Options</b></li>
              <li>
                <div className="checkbox checkbox-info">
                  <input id="checkbox1" type="checkbox" className="fxhdr" />
                  <label htmlFor="checkbox1"> Fix Header </label>
                </div>
              </li>
              <li>
                <div className="checkbox checkbox-warning">
                  <input id="checkbox2" type="checkbox" className="fxsdr" />
                  <label htmlFor="checkbox2"> Fix Sidebar </label>
                </div>
              </li>
              <li>
                <div className="checkbox checkbox-success">
                  <input id="checkbox4" type="checkbox" className="open-close" />
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
              <br />
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
    );
  }
}

export default RightSideBar;
