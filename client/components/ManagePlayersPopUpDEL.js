import React from 'react';
import wrapper from '../style/common/wrapper';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import TextField from 'material-ui/TextField';
//import SelectField from 'material-ui/SelectField';
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

const renderTextField = (props) => { 
  return (
    <TextField hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.touched && props.error}
      {...props}
    />
  );
};

class ManagePlayersPopUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleTouchTap() {
    this.setState({
      open: true
    })
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const { handleSubmit, onHandleFormSubmit, pristine, reset, submitting, submittingForm, handleTouchTap } = this.props;
    const PopoverStyle = {
      width: '100%'
    }
  return (
      <div style={{width: '100%'}}>
        <RaisedButton
          fullWidth={true}
          onTouchTap={this.handleTouchTap.bind(this)}
          label="Добавить игрока"
        />
        <Popover
          style={PopoverStyle}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
           <div style={style}>
      <form style={style} onSubmit={handleSubmit(onHandleFormSubmit)}>
        <div>
          <Field name="firstName" component={renderTextField} label="Имя"/>
        </div>
        <div>
          <Field name="lastName" component={renderTextField} label="Фамилия"/>
        </div>
        <div>
          <Field name="position" component={renderTextField} label="Position"/>
        </div>
        <div>
          <Field name="email" component={renderTextField} label="Email"/>
        </div>
        <div>
          <RaisedButton type="submit" disabled={pristine || submittingForm} label="Добавить" primary={true} />
        </div>
      </form>
    </div>
        </Popover>
      </div>



 
    );
  } 
};

export default ManagePlayersPopUp;
