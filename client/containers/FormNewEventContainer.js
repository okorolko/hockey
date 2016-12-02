import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import SignIn from '../components/SignIn';
import { connect } from 'react-redux';
import { signIn } from '../actions/signInUp';
import { browserHistory } from 'react-router';
import FormNewEventGame from '../components/FormNewEventGame';

class FormNewEventContainer extends Component {
  constructor(props) {
    super(props)
  }
  onHandleFormSubmit() {
    console.log('sub')
  }

  render() {
    return (
      <FormNewEventGame
        onHandleFormSubmit={this.onHandleFormSubmit.bind(this)}
        {...this.props}
      />
    );
  }
}

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

React.propTypes = {
    onHandleFormSubmit: PropTypes.func.isRequired,
    submittingForm: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'newEventGame',
    //validate,
})(FormNewEventContainer);



