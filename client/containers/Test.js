import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const form = reduxForm({
  form: 'ReduxFormTutorial',
  
});

const renderTextField = props => (
  <TextField 
    hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
  />
);

const renderField = field => (
    <div>
      <input {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);


class ReduxFormTutorial extends Component {
  handleFormSubmit(formProps) {
    console.log(123123123412341234, formProps)
   // this.props.submitFormAction(formProps);
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <label>First Name:</label>
          <Field name="firstName" type="text" component={renderField}/>

          <label>Last Name:</label>
          <Field name="lastName" type="text" component={renderField}/>

          <label>Gender:</label>
          <Field name="sex" component="select">
            <option></option>
            <option name="Male">Male</option>
            <option name="Female">Female</option>
          </Field>

          <label>Email:</label>
          <Field name="email" type="email" component={renderField} />

          <label>Phone:</label>
          <Field name="phoneNumber" type="tel" component={renderField}/>

          <button action="submit">Save changes</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(form(ReduxFormTutorial));