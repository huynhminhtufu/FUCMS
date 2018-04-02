import React, { Component } from 'react';

class Slidebar extends Component {
  componentDidMount() {
    if (window.slidebar) {
      window.slidebar();
    }    
  }

  render() {
    return (
      <div className="ms-slidebar sb-slidebar sb-left sb-style-overlay" id="ms-slidebar">
        <div className="sb-slidebar-container">
          <header className="ms-slidebar-header">
            <div className="ms-slidebar-login">
              <a href="#" className="withripple" data-toggle="modal" data-target="#ms-account-modal">
                <i className="zmdi zmdi-account" /> Login</a>
              <a href="#" className="withripple" data-toggle="modal" data-target="#ms-account-modal">
                <i className="zmdi zmdi-account-add" /> Register</a>
            </div>
            <div className="ms-slidebar-title">
              <form className="search-form">
                <input id="search-box-slidebar" type="text" className="search-input" placeholder="Search..." name="q" />
                <label htmlFor="search-box-slidebar">
                  <i className="zmdi zmdi-search" />
                </label>
              </form>
              <div className="ms-slidebar-t">
                <span className="ms-logo ms-logo-sm">FU</span>
                <h3>CMS
                    <span>Beta</span>
                </h3>
              </div>
            </div>
          </header>
          <ul className="ms-slidebar-menu" id="slidebar-menu" role="tablist" aria-multiselectable="true">
            <li className="card" role="tab" id="sch1">
              <a className="collapsed" role="button" data-toggle="collapse" href="#sc1" aria-expanded="false" aria-controls="sc1">
                <i className="zmdi zmdi-home" /> Home </a>
              <ul id="sc1" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch1" data-parent="#slidebar-menu">
                <li>
                  <a href="index-2.html">Default Home</a>
                </li>
                <li>
                  <a href="home-generic-2.html">Home Black Slider</a>
                </li>
                <li>
                  <a href="home-landing.html">Home Landing Intro</a>
                </li>
                <li>
                  <a href="home-landing3.html">Home Landing Video</a>
                </li>
                <li>
                  <a href="home-shop.html">Home Shop 1</a>
                </li>
              </ul>
            </li>
            <li className="card" role="tab" id="sch2">
              <a className="collapsed" role="button" data-toggle="collapse" href="#sc2" aria-expanded="false" aria-controls="sc2">
                <i className="zmdi zmdi-desktop-mac" /> Pages </a>
              <ul id="sc2" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch2" data-parent="#slidebar-menu">
                <li>
                  <a href="page-about.html">About US</a>
                </li>
                <li>
                  <a href="page-team.html">Our Team</a>
                </li>
                <li>
                  <a href="page-product.html">Products</a>
                </li>
                <li>
                  <a href="page-services.html">Services</a>
                </li>
                <li>
                  <a href="page-faq.html">FAQ</a>
                </li>
                <li>
                  <a href="page-timeline_left.html">Timeline</a>
                </li>
                <li>
                  <a href="page-contact.html">Contact Option</a>
                </li>
                <li>
                  <a href="page-login.html">Login</a>
                </li>
                <li>
                  <a href="page-pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="page-coming.html">Coming Soon</a>
                </li>
              </ul>
            </li>
            <li className="card" role="tab" id="sch4">
              <a className="collapsed" role="button" data-toggle="collapse" href="#sc4" aria-expanded="false" aria-controls="sc4">
                <i className="zmdi zmdi-edit" /> Blog </a>
              <ul id="sc4" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch4" data-parent="#slidebar-menu">
                <li>
                  <a href="blog-sidebar.html">Blog Sidebar 1</a>
                </li>
                <li>
                  <a href="blog-sidebar2.html">Blog Sidebar 2</a>
                </li>
                <li>
                  <a href="blog-masonry.html">Blog Masonry 1</a>
                </li>
                <li>
                  <a href="blog-masonry2.html">Blog Masonry 2</a>
                </li>
                <li>
                  <a href="blog-full.html">Blog Full Page 1</a>
                </li>
                <li>
                  <a href="blog-full2.html">Blog Full Page 2</a>
                </li>
                <li>
                  <a href="blog-post.html">Blog Post 1</a>
                </li>
                <li>
                  <a href="blog-post2.html">Blog Post 2</a>
                </li>
              </ul>
            </li>
            <li className="card" role="tab" id="sch5">
              <a className="collapsed" role="button" data-toggle="collapse" href="#sc5" aria-expanded="false" aria-controls="sc5">
                <i className="zmdi zmdi-shopping-basket" /> E-Commerce </a>
              <ul id="sc5" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch5" data-parent="#slidebar-menu">
                <li>
                  <a href="ecommerce-filters.html">E-Commerce Sidebar</a>
                </li>
                <li>
                  <a href="ecommerce-filters-full.html">E-Commerce Sidebar Full</a>
                </li>
                <li>
                  <a href="ecommerce-filters-full2.html">E-Commerce Topbar Full</a>
                </li>
                <li>
                  <a href="ecommerce-item.html">E-Commerce Item</a>
                </li>
                <li>
                  <a href="ecommerce-cart.html">E-Commerce Cart</a>
                </li>
              </ul>
            </li>
            <li className="card" role="tab" id="sch6">
              <a className="collapsed" role="button" data-toggle="collapse" href="#sc6" aria-expanded="false" aria-controls="sc6">
                <i className="zmdi zmdi-collection-image-o" /> Portfolio </a>
              <ul id="sc6" className="card-collapse collapse" role="tabpanel" aria-labelledby="sch6" data-parent="#slidebar-menu">
                <li>
                  <a href="portfolio-filters_sidebar.html">Portfolio Sidebar Filters</a>
                </li>
                <li>
                  <a href="portfolio-filters_topbar.html">Portfolio Topbar Filters</a>
                </li>
                <li>
                  <a href="portfolio-filters_sidebar_fluid.html">Portfolio Sidebar Fluid</a>
                </li>
                <li>
                  <a href="portfolio-filters_topbar_fluid.html">Portfolio Topbar Fluid</a>
                </li>
                <li>
                  <a href="portfolio-cards.html">Porfolio Cards</a>
                </li>
                <li>
                  <a href="portfolio-masonry.html">Porfolio Masonry</a>
                </li>
                <li>
                  <a href="portfolio-item.html">Portfolio Item 1</a>
                </li>
                <li>
                  <a href="portfolio-item2.html">Portfolio Item 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="link" href="component-typography.html">
                <i className="zmdi zmdi-view-compact" /> UI Elements</a>
            </li>
            <li>
              <a className="link" href="page-all.html">
                <i className="zmdi zmdi-link" /> All Pages</a>
            </li>
          </ul>
          <div className="ms-slidebar-social ms-slidebar-block">
            <h4 className="ms-slidebar-block-title">Social Links</h4>
            <div className="ms-slidebar-social">
              <button className="btn-circle btn-circle-raised btn-facebook">
                <i className="zmdi zmdi-facebook" />
                <span className="badge-pill badge-pill-pink">12</span>
                <div className="ripple-container" />
              </button>
              <button className="btn-circle btn-circle-raised btn-twitter">
                <i className="zmdi zmdi-twitter" />
                <span className="badge-pill badge-pill-pink">4</span>
                <div className="ripple-container" />
              </button>
              <button className="btn-circle btn-circle-raised btn-google">
                <i className="zmdi zmdi-google" />
                <div className="ripple-container" />
              </button>
              <button className="btn-circle btn-circle-raised btn-instagram">
                <i className="zmdi zmdi-instagram" />
                <div className="ripple-container" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slidebar;