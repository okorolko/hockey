import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from 'redux-form-material-ui';
import { RaisedButton } from 'material-ui';

const renderTextField = props => { 
  return (
    <TextField hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.touched && props.error}
      {...props}
    />
  );
};

const renderPasswordField = props => { 
  return (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    type={'password'}
    errorText={props.touched && props.error}
    {...props}
  />
  );
}

const renderDateField = props => {
  const selected = props.value ? props.value : null;
  return (
      <DatePicker 
        placeholderText={props.placeholder} 
        className="form-control" 
        {...props}
      />
  );
}


const FormNewEventGame = props => {
  const { handleSubmit, onHandleFormSubmit, pristine, reset, submitting, submittingForm } = props
  return (
    <div>
      <h1>Hockey Reminder</h1>
      <form onSubmit={handleSubmit(onHandleFormSubmit)}>
        <div>
          <Field name="email" component={renderTextField} label="Email"/>
        </div>
          <div>
          <Field name="date" component={renderDateField} label="Дата"/>
        </div>
        <div>
          <RaisedButton type="button" label="Вернуться" secondary={true} />
          <RaisedButton type="submit" disabled={pristine || submittingForm} label="Войти" primary={true} />
        </div>
      </form>
     </div> 
  )
}

export default FormNewEventGame;
