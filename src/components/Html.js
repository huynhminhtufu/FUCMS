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
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
    clientStyles: PropTypes.arrayOf(PropTypes.string),
    clientScripts: PropTypes.arrayOf(PropTypes.string),
    path: PropTypes.string,
    adminStyles: PropTypes.arrayOf(PropTypes.string),
    adminScripts: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    styles: [],
    scripts: [],
    clientStyles: [
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      '/default/assets/css/plugins.min.css',
      '/default/assets/css/preload.min.css',
      '/default/assets/css/style.light-blue-500.min.css',
      '/default/assets/css/custom.css',
    ],
    clientScripts: [
      '/default/assets/js/plugins.min.js',
      '/default/assets/js/app.min.js',
      '/default/assets/js/configurator.min.js',
    ],
    adminStyles: [
      '/admin/assets/bootstrap/dist/css/bootstrap.min.css',
      '/admin/assets/plugins/bower_components/bootstrap-extension/css/bootstrap-extension.css',
      '/admin/assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css',
      '/admin/assets/css/animate.css',
      '/admin/assets/css/style.css',
      '/admin/assets/css/colors/blue.css',
    ],
    adminScripts: [
      '/admin/assets/plugins/bower_components/jquery/dist/jquery.min.js',
      '/admin/assets/bootstrap/dist/js/tether.min.js',
      '/admin/assets/bootstrap/dist/js/bootstrap.min.js',
      '/admin/assets/plugins/bower_components/bootstrap-extension/js/bootstrap-extension.min.js',
      '/admin/assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js',
      '/admin/assets/js/jquery.slimscroll.js',
      '/admin/assets/js/waves.js',
      '/admin/assets/js/custom.min.js',
      '/admin/assets/plugins/bower_components/styleswitcher/jQuery.style.switcher.js',
    ],
  };

  render() {
    const {
      title,
      description,
      styles,
      scripts,
      app,
      children,
      clientStyles,
      clientScripts,
      path,
      adminStyles,
      adminScripts,
    } = this.props;

    const isAdmin = path && path.indexOf(config.admin.path) === 0;
    const mainStyles = isAdmin ? adminStyles : clientStyles;
    const mainScripts = isAdmin ? adminScripts : clientScripts;

    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {scripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          {mainScripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          {/* <link
            rel="stylesheet"
            href="/default/assets/css/width-boxed.min.css"
            id="ms-boxed"
            disabled="true"
          /> */}

          {mainStyles.map((style, index) => (
            <link
              key={index}
              rel="stylesheet"
              href={style}
            />
          ))}

          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
        </head>
        <body>
          <div id="ms-preload" className="ms-preload">
            <div id="status">
              <div className="spinner">
                <div className="dot1" />
                <div className="dot2" />
              </div>
            </div>
          </div>
          <div
            id="app"
            dangerouslySetInnerHTML={{ __html: children }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} defer="defer" async="async"/>)}
          {mainScripts.map(script => <script key={script} src={script}/>)}
          {config.analytics.googleTrackingId && (
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${
                    config.analytics.googleTrackingId
                  }','auto');ga('send','pageview')`,
              }}
            />
          )}
          {config.analytics.googleTrackingId && (
            <script
              src="https://www.google-analytics.com/analytics.js"
              async
              defer
            />
          )}
        </body>
      </html>
    );
  }
}

export default Html;
