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

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    // List RSS size
    const size = 5;

    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-keyboard ms-hero-bg-primary mb-6">
          <div className="container">
            <div className="text-center">
              <span className="ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-5">
                FU
              </span>
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Blog CMS
              </h1>
              <p className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Follow our blog and discover the latest content and trends in
                the market. In addition you will discover the best
                <span className="colorStar"> tricks</span> and
                <span className="colorStar"> discounts</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {this.props.news.slice(0, size).map((item, index) => (
                <article key={item.link} className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-white"
                      >
                        {item.title}
                      </a>
                    </h3>
                  </div>
                  <div
                    className="card-collapse collapse show"
                    role="tabpanel"
                    id={`#collapsePost${index}`}
                  >
                    <div
                      className="card-body"
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="card animated fadeInUp animation-delay-7">
                <div className="ms-hero-bg-royal ms-hero-img-coffee">
                  <h3 className="color-white index-1 text-center no-m pt-4">
                    FU Writer
                  </h3>
                  <div className="color-medium index-1 text-center np-m">
                    @fu_writer
                  </div>
                  <img
                    src="https://i.imgur.com/Wl4wOFG.png"
                    alt="..."
                    className="img-avatar-circle"
                  />{' '}
                </div>
                <div className="card-body pt-4 text-center">
                  <h3 className="color-primary">About us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur alter adipisicing
                    elit. Facilis, natuse inse voluptates officia repudiandae
                    beatae magni es magnam autem molestias.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook"
                  >
                    <i className="zmdi zmdi-facebook" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter"
                  >
                    <i className="zmdi zmdi-github" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram"
                  >
                    <i className="zmdi zmdi-skype" />
                  </a>
                </div>
              </div>

              <div className="card card-primary animated fadeInUp animation-delay-7">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="zmdi zmdi-widgets" />Advertising
                  </h3>
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat ipsam non eaque est architecto doloribus, labore
                    nesciunt laudantium, ex id ea, cum facilis similique tenetur
                    fugit nemo id minima possimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
