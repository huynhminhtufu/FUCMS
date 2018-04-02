import React, { Component } from 'react';

class LoginModal extends Component {
  render() {
    return (
      <div className="modal modal-primary" id="ms-account-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog animated zoomIn animated-3x" role="document">
          <div className="modal-content">
            <div className="modal-header d-block shadow-2dp no-pb">
              <button type="button" className="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  <i className="zmdi zmdi-close" />
                </span>
              </button>
              <div className="modal-title text-center">
                <span className="ms-logo ms-logo-white ms-logo-sm mr-1">FU</span>
                <h3 className="no-m ms-site-title">CMS
                  <span>Beta</span>
                </h3>
              </div>
              <div className="modal-header-tabs">
                <ul className="nav nav-tabs nav-tabs-full nav-tabs-3 nav-tabs-primary" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="nav-link active withoutripple">
                      <i className="zmdi zmdi-account" /> Login</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" className="nav-link withoutripple">
                      <i className="zmdi zmdi-account-add" /> Register</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="#ms-recovery-tab" aria-controls="ms-recovery-tab" role="tab" data-toggle="tab" className="nav-link withoutripple">
                      <i className="zmdi zmdi-key" /> Recovery Pass</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-body">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade active show" id="ms-login-tab">
                  <form autoComplete="off" action="/login">
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-account" />
                          </span>
                          <label className="control-label" htmlFor="ms-form-user">Username</label>
                          <input type="text" id="ms-form-user" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock" />
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" className="form-control" /> </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="form-group no-mt">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> Remember Me </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <button className="btn btn-raised btn-primary pull-right">Login</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                  <div className="text-center">
                    <h3>Login with</h3>
                    <button className="wave-effect-light btn btn-raised btn-facebook">
                      <i className="zmdi zmdi-facebook" /> Facebook</button>
                    <button className="wave-effect-light btn btn-raised btn-twitter">
                      <i className="zmdi zmdi-twitter" /> Twitter</button>
                    <button className="wave-effect-light btn btn-raised btn-google">
                      <i className="zmdi zmdi-google" /> Google</button>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="ms-register-tab">
                  <form action="/register">
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-account" />
                          </span>
                          <label className="control-label" htmlFor="ms-form-user-r">Username</label>
                          <input type="text" id="ms-form-user-r" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-email" />
                          </span>
                          <label className="control-label" htmlFor="ms-form-email-r">Email</label>
                          <input type="email" id="ms-form-email-r" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock" />
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass-r">Password</label>
                          <input type="password" id="ms-form-pass-r" className="form-control" /> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock" />
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass-rn">Re-type Password</label>
                          <input type="password" id="ms-form-pass-rn" className="form-control" /> </div>
                      </div>
                      <button className="btn btn-raised btn-block btn-primary">Register Now</button>
                    </fieldset>
                  </form>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="ms-recovery-tab">
                  <fieldset>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-account" />
                        </span>
                        <label className="control-label" htmlFor="ms-form-user-re">Username</label>
                        <input type="text" id="ms-form-user-re" className="form-control" /> </div>
                    </div>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-email" />
                        </span>
                        <label className="control-label" htmlFor="ms-form-email-re">Email</label>
                        <input type="email" id="ms-form-email-re" className="form-control" /> </div>
                    </div>
                    <button className="btn btn-raised btn-block btn-primary">Send Password</button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;