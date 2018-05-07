import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Form';
import { login } from '../../actions/user';

class LoginForm extends Form {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        username: {
          validates: {
            required: true,
          }
        },
        password: {
          validates: {
            required: true,
          }
        },
        remember: {},
      }
    };
  }

  async onSubmit(e) {
    e && e.preventDefault();

    // call validateForm of Form component
    if (!this.validateForm()) {
      return;
    }

    const { login } = this.props;
    const { fields } = this.state;

    const data = {};
    Object.keys(fields).forEach(key => {
      data[key] = fields[key].value;
    });

    const user = await login(data);

    if (user.id) {
      $('#ms-account-modal').modal('hide');
    }
  }

  render() {
    const { fields } = this.state;

    return (
      <form autoComplete="off" action="/login"
        onSubmit={e => this.onSubmit(e)}
        noValidate
      >
        <fieldset>
          <div className={`form-group label-floating ${fields.username.error ? 'has-error is-focused' : ''}`}>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="zmdi zmdi-account" />
              </span>
              <input type="text" id="ms-form-user" className="form-control"
                name="username"
                onChange={e => this.onFieldChange(e)}
                required
              />
              <label className="control-label" htmlFor="ms-form-user">Username</label>
              <p className="help-block">{fields.username.error}</p>
            </div>
          </div>
          <div className={`form-group label-floating ${fields.password.error ? 'has-error is-focused' : ''}`}>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="zmdi zmdi-lock" />
              </span>
              <input type="password" id="ms-form-pass" className="form-control"
                name="password"
                onChange={e => this.onFieldChange(e)}
                required
              />
              <label className="control-label" htmlFor="ms-form-pass">Password</label>
              <p className="help-block">{fields.password.error}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className="form-group no-mt">
                <div className="checkbox">
                  <label>
                    <input type="checkbox"
                      name="remember"
                      onChange={e => this.onFieldChange(e)}
                    /> <span>Remember Me</span> </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <button className="btn btn-raised btn-primary pull-right">Login</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatch = {
  login,
};

export default connect(mapStateToProps, mapDispatch)(LoginForm);