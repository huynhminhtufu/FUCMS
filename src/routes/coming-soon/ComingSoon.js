/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../../components/Link';

class ComingSoon extends React.Component {
  render() {
    return (
      <div className="bg-full-page ms-hero-img-coffee ms-hero-bg-primary ms-bg-fixed back-fixed">
        <div className="absolute-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="card card-flat bg-transparent">
                  <div className="card-body color-white">
                    <header className="text-center mb-2">
                      <span className="ms-logo ms-logo-lg ms-logo-white center-block mb-2 animated zoomInDown animation-delay-5">FU</span>
                      <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">CMS
                      <span> + Elearning</span>
                      </h1>
                      <p className="lead lead-xl mt-2 animated fadeInUp animation-delay-7">Fast & Unbelievable CMS based on NodeJS, include incredible Social System.</p>
                    </header>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="text-center card-body animated zoomIn animation-delay-10">
                          <span className="btn-circle btn-circle-raised btn-circle-white btn-circle-xlg color-warning">
                            <i className="zmdi zmdi-cloud-outline"></i>
                          </span>
                          <h4 className="color-white">Cloud Service</h4>
                          <p className="">Completely based on Cloud Web Service.</p>
                          <Link to="/" className="btn btn-white color-warning btn-raised">
                            <i className="zmdi zmdi-download"></i> Learn More</Link>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="text-center card-body animated zoomIn animation-delay-10">
                          <span className="btn-circle btn-circle-raised btn-circle-white btn-circle-xlg color-info">
                            <i className="zmdi zmdi-graduation-cap"></i>
                          </span>
                          <h4 className="color-white">NodeJS Elearning</h4>
                          <p className="">Powered by NodeJS, your system will be ultimate.</p>
                          <Link to="/" className="btn btn-white color-info btn-raised">
                            <i className="zmdi zmdi-info"></i> More info</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card index-1 animated zoomInRight animation-delay-7">
                  <div className="card-body-big">
                    <h1 className="color-primary">Coming Soon</h1>
                    <p className="lead">FUCMS is currently developing by the FU Team. It will be available on Dec 2018.</p>
                    <div id="ms-countdown"></div>
                    <h2 className="color-primary">Let me know</h2>
                    <form>
                      <div className="form-group label-floating mt-2 mb-1 is-empty">
                        <div className="input-group center-block">
                          <label className="control-label" htmlFor="ms-subscribe">
                            <i className="zmdi zmdi-email"></i> Email Adress</label>
                          <input type="email" id="ms-subscribe" className="form-control" /> </div>
                      </div>
                      <button className="btn btn-raised btn-primary btn-block" type="button">Subscribe</button>
                    </form>
                    <div className="text-center mt-4">
                      <a href="javascript:void(0)" className="btn-circle btn-circle-raised mt-1 mr-1 no-mr-md btn-google">
                        <i className="zmdi zmdi-google"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn-circle btn-circle-raised mt-1 mr-1 no-mr-md btn-facebook">
                        <i className="zmdi zmdi-facebook"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn-circle btn-circle-raised mt-1 mr-1 no-mr-md btn-twitter">
                        <i className="zmdi zmdi-twitter"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn-circle btn-circle-raised mt-1 mr-1 no-mr-md btn-instagram">
                        <i className="zmdi zmdi-instagram"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn-circle btn-circle-raised mt-1 mr-1 no-mr-md btn-linkedin">
                        <i className="zmdi zmdi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="lead lead-sm text-center mt-4 color-medium animated fadeInUp animation-delay-16">FUCMS &copy; Copyright 2018 FU Team</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;