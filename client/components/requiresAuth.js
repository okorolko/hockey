import React, { PropTypes } from 'react';  
import { connect } from 'react-redux';  
import { checkAuth } from '../actions/account';
import { browserHistory } from 'react-router';

export default function requiresAuth(Component) {  
  class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.checkAndRedirect();
    }
    componentDidUpdate() {
      if (!this.props.user) {
        browserHistory.push('/signin');
      }
    }
    checkAndRedirect() {
      this.props.dispatch(checkAuth());
    }

    render() {
      return (
        <div className="authenticated">
          { this.props.user ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.account.user,
      submitting: state.account.submitting,
    };
  };

  React.propTypes = {
    user: PropTypes.bool,
    submitting: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
}