import React from 'react';
import wrapper from '../style/common/wrapper';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

export class ManagePlayersSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }
  render() {
    return (
        <SelectField
         floatingLabelText="Floating Label Text"
          floatingLabelFixed={true}
          hintText="Hint text"
          value={this.state.value}
          onChange={this.handleChange}

        >
          <MenuItem value={1} primaryText="Лев Нап" />
          <MenuItem value={2} primaryText="Цен Нап" />
          <MenuItem value={3} primaryText="Прав Нап" />
          <MenuItem value={4} primaryText="Лев Защ" />
          <MenuItem value={5} primaryText="Прав Защ" />
          <MenuItem value={5} primaryText="Вратарь" />
        </SelectField>
    )
  }
}

export default class ManagePlayersPopUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value, 'sub')
  }

  render() {
    const PopoverStyle = {
      width: '100%'
    }
    return (
      <div style={{width: '100%'}}>
        <RaisedButton
          fullWidth={true}
          onTouchTap={this.handleTouchTap}
          label="Добавить игрока"
        />
        <Popover
          style={PopoverStyle}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
        <form onSubmit={this.handleSubmit}>
          <div style={wrapper} >
            <TextField
              floatingLabelText="Имя"
            />
            <ManagePlayersSelect />
            <ManagePlayersSelect />

            <div><button type="submit">Click Me!</button></div>
          </div>
        </form>
        </Popover>
      </div>
    );
  }
}