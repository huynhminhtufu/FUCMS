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

const title = 'Contact Us';

function action() {
  return {
    chunks: ['contact'],
    title,
    component: (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="card card-primary animated fadeInUp animation-delay-7">
                <div className="ms-hero-bg-primary ms-hero-img-mountain">
                  <h2 className="text-center no-m pt-4 pb-4 color-white index-1">
                    Contact
                  </h2>
                </div>
                <div className="card-body">
                  <form className="form-horizontal">
                    <fieldset className="container">
                      <div className="form-group row">
                        <label
                          htmlFor="inputEmail"
                          autoComplete="false"
                          className="col-lg-2 control-label"
                        >
                          Name
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder="Name"
                          />{' '}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="inputEmail"
                          autoComplete="false"
                          className="col-lg-2 control-label"
                        >
                          Email
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email"
                          />{' '}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="inputEmail"
                          autoComplete="false"
                          className="col-lg-2 control-label"
                        >
                          Subject
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            id="inputSubject"
                            placeholder="Subject"
                          />{' '}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="textArea"
                          className="col-lg-2 control-label"
                        >
                          Message
                        </label>
                        <div className="col-lg-9">
                          <textarea
                            className="form-control"
                            rows="3"
                            id="textArea"
                            placeholder="Yout message..."
                          />
                        </div>
                      </div>
                      <div className="form-group row justify-content-end">
                        <div className="col-lg-10">
                          <button
                            type="submit"
                            className="btn btn-raised btn-primary"
                          >
                            Submit
                          </button>
                          <button type="button" className="btn btn-danger">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="card card-primary animated fadeInUp animation-delay-7">
                <div className="card-body">
                  <div className="text-center mb-2">
                    <span className="ms-logo ms-logo-sm mr-1">FU</span>
                    <h3 className="no-m ms-site-title">
                      CMS
                      <span> Beta</span>
                    </h3>
                  </div>
                  <address className="no-mb">
                    <p>
                      <i className="color-danger-light zmdi zmdi-pin mr-1" />{' '}
                      795 Folsom Ave, Suite 600
                    </p>
                    <p>
                      <i className="color-warning-light zmdi zmdi-map mr-1" />{' '}
                      San Francisco, CA 94107
                    </p>
                    <p>
                      <i className="color-info-light zmdi zmdi-email mr-1" />
                      <a href="mailto:joe@example.com">contact@fucms.com</a>
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
              </div>
              <div className="card card-primary animated fadeInUp animation-delay-7">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="zmdi zmdi-map" />Map
                  </h3>
                </div>
                <iframe
                  title="address"
                  width="100%"
                  height="340"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48342.06480344582!2d-73.980069429762!3d40.775680208459505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral+Park!5e0!3m2!1sen!2sus!4v1491233314840"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Page {...contact} /> */}
      </Layout>
    ),
  };
}

export default action;
