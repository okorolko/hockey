import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SignUp from '../components/SignUp';
import { connect } from 'react-redux';
import { registerUser } from '../actions/signInUp';


class SignUpContainer extends Component {
  render() {
    return (
      <Signup 
        onHandleFormSubmit={this.props.onHandleFormSubmit}
        submittingForm={this.props.submittingForm}
      />
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onHandleFormSubmit: (form) => {
      dispatch(registerUser(form.email, form.password, form.team, form.firstName))
    }
  }
}


const mapStateToProps = (state) => {
  return {
    submittingForm: state.signUp.submitting
    }
  }


const validate = values => {
  const errors = {};
  const requiredFields = ['firstName', 'email', 'password', 'team'];
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

SignUpContainer = reduxForm({
  form: 'signUp',
  validate,
})(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
