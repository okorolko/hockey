import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ManagePlayersPopUp from '../components/ManagePlayersPopUp';
import { connect } from 'react-redux';
import { registerUser } from '../actions/signInUp';

class ManagePlayersPopUpContainer extends Component {
  constructor(props) {
    super(props)
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }
  render() {
    return (
      <ManagePlayersPopUp handleTouchTap={this.handleTouchTap} />
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
  const requiredFields = ['firstName', 'lastName', 'email', 'position'];
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

ManagePlayersPopUpContainer = reduxForm({
  form: 'registerNewPlayer',
  validate,
})(ManagePlayersPopUp);

export default connect(mapStateToProps, mapDispatchToProps)(ManagePlayersPopUpContainer);