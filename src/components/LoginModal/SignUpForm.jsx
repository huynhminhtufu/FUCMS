import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Form';

class SignUpForm extends Form {
    static propTypes = {
        //
    };

    constructor(props) {
        super(props);
        //
    }

    render() {
        return (
            <form action="/register" noValidate>
                <fieldset>
                    <div className="form-group label-floating">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-account" />
                            </span>
                            <input type="text" id="ms-form-user-r" className="form-control" required/>
                            <label className="control-label" htmlFor="ms-form-user-r">Username</label>
                        </div>
                    </div>
                    <div className="form-group label-floating">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-email" />
                            </span>
                            <input type="text" id="ms-form-email-r" className="form-control" required/>
                            <label className="control-label" htmlFor="ms-form-email-r">Email</label>
                        </div>
                    </div>
                    <div className="form-group label-floating">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-lock" />
                            </span>
                            <input type="password" id="ms-form-pass-r" className="form-control" required/>
                            <label className="control-label" htmlFor="ms-form-pass-r">Password</label>
                        </div>
                    </div>
                    <div className="form-group label-floating">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-lock" />
                            </span>
                            <input type="password" id="ms-form-pass-rn" className="form-control" required/>
                            <label className="control-label" htmlFor="ms-form-pass-rn">Re-type Password</label>
                        </div>
                    </div>
                    <button className="btn btn-raised btn-block btn-primary">Sign Up Now</button>
                </fieldset>
            </form>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatch = {
    //
};

export default connect(mapStateToProps, mapDispatch)(SignUpForm);