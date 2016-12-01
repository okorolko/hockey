import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SignIn from '../components/SignIn';
import { connect } from 'react-redux';
import { signIn } from '../actions/signInUp';
import { browserHistory } from 'react-router';


class SignInContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('Mounted!')
  }
  render() {
    return (
      <SignIn 
        onHandleFormSubmit={this.props.onHandleFormSubmit}
        submittingForm={this.props.submittingForm}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleFormSubmit: (form) => {
      dispatch(signIn(form.email, form.password))
    }
  }
}

const mapStateToProps = (state) => {
  //if (state.account.user) {
    //browserHistory.push('/manageplayers');
  //}
  return {
    submittingForm: state.account.submitting,
    user: state.account.user,
  };
};

const validate = values => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Поле обязательно для заполнения';
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильный email'
  }
  return errors
}

SignInContainer = reduxForm({
  form: 'signIn',
  validate,
})(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
