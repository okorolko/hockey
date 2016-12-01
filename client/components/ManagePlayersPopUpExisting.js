import React from 'react';
import wrapper from '../style/common/wrapper';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { connect } from 'react-redux';
import { addPlayer, editPlayer, deletePlayer } from '../actions/managePlayers';


class ManagePlayersPopUpExisting extends React.Component {
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
    this.handlePlayerDelete = this.handlePlayerDelete.bind(this);
  }
  componentWillMount() {
      this.setState({
        id: this.props.id,
        position: this.props.position,
        playerFirstName: this.props.firstName,
        playerSecondName: this.props.secondName,
        playerEmail: this.props.email,
      })
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
  handlePlayerDelete() {
    this.props.dispatch(deletePlayer(this.state))
     this.setState({
        open: false,
      })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(editPlayer(this.state))
      this.setState({
        open: false,
      })
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
      width: '100%',
    };
    const { firstName, secondName, email } = this.props;
    return (
      <div style={{width: '100%'}}>
        <RaisedButton
          fullWidth={true}
          onTouchTap={this.handleTouchTap}
          label={`${firstName} ${secondName}`}
        />
        <Popover
          style={PopoverStyle}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          >      
          <form onSubmit={this.handleSubmit}>
          <div style={wrapper} >
            <TextField
              id="playerFirstName"
              floatingLabelText="Имя"
              onChange={this.handleChangeText}
              value={this.state.playerFirstName}
            />
            <TextField
              id="playerSecondName"
              floatingLabelText="Фамилия"
              onChange={this.handleChangeText}
              value={this.state.playerSecondName}
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
              value={this.state.playerEmail}
            />
            <div style={{width: '100%',display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
              <RaisedButton style={{width: '45%', marginRight: '10px'}} type="submit" label="Сохранить" primary={true} />
              <RaisedButton style={{width: '45%'}} onClick={() => {this.handlePlayerDelete()}} label="Удалить" secondary={true} />
            </div>
          </div>
        </form>
        </Popover>
      </div>
    );
  }
}

export default connect()(ManagePlayersPopUpExisting);
