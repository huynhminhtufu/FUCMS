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
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-keyboard ms-hero-bg-primary mb-6">
          <div className="container">
            <div className="text-center">
              <span className="ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-5">
                FU
              </span>
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Blog
              </h1>
              <p className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Follow our blog and discover the latest content and trends in
                the market. In addition you will discover the best
                <span className="colorStar">tricks</span> and
                <span className="colorStar">discounts</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.props.news.map((item, index) => (
              <article key={item.link} className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">
                    <a
                      href={item.link}
                      className="text-white"
                      role="button"
                      data-toggle="collapse"
                      href={`#collapsePost${index}`}
                      aria-expanded="true"
                      aria-controls={`#collapsePost${index}`}
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
        </div>
      </div>
    );
  }
}

export default Home;
