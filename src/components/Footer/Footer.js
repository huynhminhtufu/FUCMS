/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <aside className="ms-footbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 ms-footer-col">
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title">Sitemap</h3>
                  <ul className="list-unstyled ms-icon-list three_cols">
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-home" />Home
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-edit" />Blog
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-image-o" />Portafolio
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-case" /> Works
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-time" /> Timeline
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-money" /> Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-favorite-outline" /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-accounts" /> Our Team
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-face" /> Services
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="zmdi zmdi-help" /> FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/login">
                        <i className="zmdi zmdi-lock" /> Login
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        <i className="zmdi zmdi-email" /> Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title">Subscribe</h3>
                  <p className="">
                    Lorem ipsum Amet fugiat elit nisi anim mollit minim labore
                    ut esse Duis ullamco ad dolor veniam velit.
                  </p>
                  <form>
                    <div className="form-group label-floating mt-2 mb-1 is-empty">
                      <div className="input-group ms-input-subscribe">
                        <label className="control-label" htmlFor="ms-subscribe">
                          <i className="zmdi zmdi-email" /> Email Adress
                        </label>
                        <input
                          type="email"
                          id="ms-subscribe"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <button className="ms-subscribre-btn" type="button">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-7 ms-footer-col ms-footer-alt-color">
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title text-center mb-2">
                    Last Articles
                  </h3>
                  <div className="ms-footer-media">
                    <div className="media">
                      <div className="media-left media-middle">
                        <a href="javascript:void(0)">
                          <img
                            className="media-object media-object-circle"
                            src="https://i.imgur.com/UbuSxs8.jpg"
                            alt="..."
                          />{' '}
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="javascript:void(0)">
                            Lorem ipsum dolor sit expedita cumque amet
                            consectetur adipisicing repellat
                          </a>
                        </h4>
                        <div className="media-footer">
                          <span>
                            <i className="zmdi zmdi-time color-info-light" />{' '}
                            April 1, 2018
                          </span>
                          <span>
                            <i className="zmdi zmdi-folder-outline color-warning-light" />
                            <a href="javascript:void(0)">Design</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left media-middle">
                        <a href="javascript:void(0)">
                          <img
                            className="media-object media-object-circle"
                            src="https://i.imgur.com/UbuSxs8.jpg"
                            alt="..."
                          />{' '}
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="javascript:void(0)">
                            Labore ut esse Duis consectetur expedita cumque
                            ullamco ad dolor veniam velit
                          </a>
                        </h4>
                        <div className="media-footer">
                          <span>
                            <i className="zmdi zmdi-time color-info-light" />{' '}
                            April 1, 2018
                          </span>
                          <span>
                            <i className="zmdi zmdi-folder-outline color-warning-light" />
                            <a href="javascript:void(0)">News</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left media-middle">
                        <a href="javascript:void(0)">
                          <img
                            className="media-object media-object-circle"
                            src="https://i.imgur.com/UbuSxs8.jpg"
                            alt="..."
                          />{' '}
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="javascript:void(0)">
                            voluptates deserunt ducimus expedita cumque quaerat
                            molestiae labore
                          </a>
                        </h4>
                        <div className="media-footer">
                          <span>
                            <i className="zmdi zmdi-time color-info-light" />{' '}
                            April 1, 2018
                          </span>
                          <span>
                            <i className="zmdi zmdi-folder-outline color-warning-light" />
                            <a href="javascript:void(0)">Productivity</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 ms-footer-col ms-footer-text-right">
                <div className="ms-footbar-block">
                  <div className="ms-footbar-title">
                    <span className="ms-logo ms-logo-white ms-logo-sm mr-1">
                      FU
                    </span>
                    <h3 className="no-m ms-site-title">
                      CMS
                      <span>Beta</span>
                    </h3>
                  </div>
                  <address className="no-mb">
                    <p>
                      <i className="color-danger-light zmdi zmdi-pin mr-1" />{' '}
                      Innovation Building, QTSC
                    </p>
                    <p>
                      <i className="color-warning-light zmdi zmdi-map mr-1" />{' '}
                      Ho Chi Minh City, HCMC
                    </p>
                    <p>
                      <i className="color-info-light zmdi zmdi-email mr-1" />
                      <a href="/">contact@futeam.com</a>
                    </p>
                    <p>
                      <i className="color-royal-light zmdi zmdi-phone mr-1" />+34
                      123 456 7890{' '}
                    </p>
                    <p>
                      <i className="color-success-light fa fa-fax mr-1" />+34
                      123 456 7890{' '}
                    </p>
                  </address>
                </div>
                <div className="ms-footbar-block">
                  <h3 className="ms-footbar-title">Social Media</h3>
                  <div className="ms-footbar-social">
                    <a
                      href="javascript:void(0)"
                      className="btn-circle btn-facebook"
                    >
                      <i className="zmdi zmdi-facebook" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn-circle btn-twitter"
                    >
                      <i className="zmdi zmdi-twitter" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn-circle btn-youtube"
                    >
                      <i className="zmdi zmdi-youtube-play" />
                    </a>
                    <br />
                    <a
                      href="javascript:void(0)"
                      className="btn-circle btn-google"
                    >
                      <i className="zmdi zmdi-google" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn-circle btn-instagram"
                    >
                      <i className="zmdi zmdi-instagram" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn-circle btn-github"
                    >
                      <i className="zmdi zmdi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <footer className="ms-footer">
          <div className="container">
            <p>Copyright © 2018 FU Team</p>
          </div>
        </footer>

        <div className="btn-back-top">
          <a
            href="#"
            data-scroll
            id="back-top"
            className="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "
          >
            <i className="zmdi zmdi-long-arrow-up" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
