/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['about'],
    title: 'About',
    component: (
      <Layout>
        <div className="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <span className="ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-5">
                FU
              </span>
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                FUCMS
                <span> Develop</span> Team
              </h1>
              <p className="lead lead-lg color-medium text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">
                These are
                <span className="colorStar"> the professionals</span> who, every
                day, make progress
                <span className="colorStar"> the projects of our clients</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center card-top">
            <div className="col-lg-4 col-md-6">
              <div className="card card-warning wow zoomInUp mb-4 animation-delay-5">
                <div className="withripple zoom-img">
                  <a href="/contact" className="">
                    <img
                      src="https://i.imgur.com/1Hsz1Tw.jpg  "
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <span className="label label-warning pull-right">
                    Technical
                  </span>
                  <h3 className="color-warning">Minh Tran Cong</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur alter adipisicing
                    elit. Facilis, natuse inse voluptates officia repudiandae
                    beatae magni es magnam autem molestias.
                  </p>
                  <div className="row">
                    <div className="col">
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook"
                      >
                        <i className="zmdi zmdi-facebook" />
                      </a>
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter"
                      >
                        <i className="zmdi zmdi-github" />
                      </a>
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram"
                      >
                        <i className="zmdi zmdi-skype" />
                      </a>
                    </div>
                    <div className="col text-right">
                      <a
                        href="/about"
                        className="btn btn-raised btn-sm btn-warning"
                      >
                        <i className="zmdi zmdi-account" />
                        Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card card-royal wow zoomInUp mb-4 animation-delay-7">
                <div className="withripple zoom-img">
                  <a href="/contact" className="">
                    <img
                      src="http://imageshack.com/a/img923/6818/sNLv1k.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <span className="label label-warning pull-right">
                    Developer
                  </span>
                  <h3 className="color-warning">Tu Huynh Minh</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur alter adipisicing
                    elit. Facilis, natuse inse voluptates officia repudiandae
                    beatae magni es magnam autem molestias.
                  </p>
                  <div className="row">
                    <div className="col">
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook"
                      >
                        <i className="zmdi zmdi-facebook" />
                      </a>
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter"
                      >
                        <i className="zmdi zmdi-github" />
                      </a>
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram"
                      >
                        <i className="zmdi zmdi-skype" />
                      </a>
                    </div>
                    <div className="col text-right">
                      <a
                        href="/about"
                        className="btn btn-raised btn-sm btn-royal"
                      >
                        <i className="zmdi zmdi-account" />
                        Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card card-success wow zoomInUp mb-4 animation-delay-9">
                <div className="withripple zoom-img">
                  <a href="/contact" className="">
                    <img
                      src="https://i.imgur.com/L6Us4fq.jpg"
                      alt="..."
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <span className="label label-warning pull-right">
                    Designer
                  </span>
                  <h3 className="color-warning">Thanh Doan Cong</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur alter adipisicing
                    elit. Facilis, natuse inse voluptates officia repudiandae
                    beatae magni es magnam autem molestias.
                  </p>
                  <div className="row">
                    <div className="col">
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook"
                      >
                        <i className="zmdi zmdi-facebook" />
                      </a>
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter"
                      >
                        <i className="zmdi zmdi-github" />
                      </a>
                      <a
                        href="/about"
                        className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram"
                      >
                        <i className="zmdi zmdi-skype" />
                      </a>
                    </div>
                    <div className="col text-right">
                      <a
                        href="/about"
                        className="btn btn-raised btn-sm btn-success"
                      >
                        <i className="zmdi zmdi-account" />
                        Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    ),
  };
}

export default action;
