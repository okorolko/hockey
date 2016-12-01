import React from 'react';
import wrapper from '../style/common/wrapper';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/managePlayers';


class ManagePlayersPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
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

  handleSubmit(e, data) {
    e.preventDefault();
    this.props.dispatch(addPlayer(this.state))
     this.setState({
      open: false,
    });
  }

  handleChangeText(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
   handleChangeSelect(event, index, value) {
    this.setState({
      position: value
    })
  }


  render() {
    const PopoverStyle = {
      width: '100%'
    }
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
         <div style={{width: "90%"}}>
        <RaisedButton
          fullWidth={true}
          onTouchTap={this.handleTouchTap}
          label="Добавить игрока"
          secondary={true}
        />
        </div>
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
              id="playerFirstName"
              floatingLabelText="Имя"
              onChange={this.handleChangeText}
            />
            <TextField
              id="playerSecondName"
              floatingLabelText="Фамилия"
              onChange={this.handleChangeText}
            />
            <SelectField
              floatingLabelText="Позиция"
              hintText="Позиция"
              value={this.state.position}
              onChange={this.handleChangeSelect}
              id="playerPosition"
            >
              <MenuItem value={'leftWing'} primaryText="Левый Нап" />
              <MenuItem value={'Centre'} primaryText="Центральный Нап" />
              <MenuItem value={'rightWing'} primaryText="Правый Нап" />
              <MenuItem value={'leftDefenceman'} primaryText="Левый Защ" />
              <MenuItem value={'rightDefenceman'} primaryText="Правый Защ" />
              <MenuItem value={'goaltender'} primaryText="Вратарь" />
            </SelectField>
            <TextField
              id="playerEmail"
              floatingLabelText="e-mail"
              onChange={this.handleChangeText}
            />
            <RaisedButton fullWidth={true} type="submit" label="Добавить" primary={true} />
          </div>
        </form>
        </Popover>
      </div>
    );
  }
}

export default connect()(ManagePlayersPopUp);
