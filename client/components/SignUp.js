import React from 'react'
import { Field, reduxForm } from 'redux-form'
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
import { RaisedButton } from 'material-ui'

const renderTextField = props => { 
  return (
    <TextField hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.touched && props.error}
      {...props}
    />
)
}

const renderPasswordField = props => { 
  return (
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    type={'password'}
    errorText={props.touched && props.error}
    {...props}
  />
)
}
const SignUp = props => {
  const { handleSubmit, onHandleFormSubmit, pristine, reset, submitting, submittingForm } = props
  return (
    <form onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div>
        <Field name="firstName" component={renderTextField} label="Имя"/>
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Фамилия"/>
      </div>
      <div>
        <Field name="team" component={renderTextField} label="Название команды"/>
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email"/>
      </div>
        <div>
        <Field name="password" component={renderTextField} label="Пароль"/>
      </div>
      <div>
        <RaisedButton type="button" label="Вернуться" secondary={true} />
        <RaisedButton type="submit" disabled={pristine || submittingForm} label="Зарегистрироваться" primary={true} />
      </div>
    </form>
  )
}

export default SignUp;
