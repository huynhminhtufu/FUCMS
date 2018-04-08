import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from '../Link';

class AccountInfo extends React.Component {
  static propTypes = {
    user: PropTypes.object,
  };

  renderForGuest() {
    return (
      <button
        className="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8"
        data-toggle="modal"
        data-target="#ms-account-modal"
      >
        <i className="zmdi zmdi-account" />
      </button>
    );
  }

  renderForUser() {
    const { profile } = this.props.user;

    return (
      <div className="btn-group animated zoomInDown animation-delay-8">
          <button type="button" className="btn btn btn-primary dropdown-toggle color-white" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
              {profile.displayName} <i className="zmdi zmdi-chevron-down right"></i>
          </button>
          <ul className="dropdown-menu">
              <li className="dropdown-header">{profile.displayName}</li>
              <li><Link className="dropdown-item" href="/me"><i className="zmdi zmdi-account-circle"></i>My profile</Link></li>
              <li><Link className="dropdown-item" href="/my-courses"><i className="zmdi zmdi-bookmark"></i>Courses</Link></li>
              <li><a className="dropdown-item" href="javascript:void(0)"><i className="zmdi zmdi-star"></i>Something else here</a></li>
              <li role="separator" className="dropdown-divider"></li>
              <li><a className="dropdown-item" href="/logout"><i className="zmdi zmdi-arrow-right"></i>Logout</a></li>
          </ul>
      </div>
    );
  }

  render() {
    const { user } = this.props;

    return user && user.id ? this.renderForUser() : this.renderForGuest();
  }
}

const mapStateToProps = state => {
  const { user } = state;

  return {
    user,
  };
};

export default connect(mapStateToProps)(AccountInfo);