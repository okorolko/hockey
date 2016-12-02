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
import { Tabs, Tab } from 'material-ui/Tabs';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import TimePicker from 'material-ui/TimePicker';


class GameForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handlePlayerDelete = this.handlePlayerDelete.bind(this);
  }
  componentWillMount() {
      this.setState({
        id: this.props.id,
        opponent: '',
        venue: '',
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
      type: value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div style={wrapper} >
            <div style={{display: 'flex', justifyContent: 'space-between', width: '68%', paddingTop: '30px'}}>
              <DatePicker
                hintText="Дата"
                DateTimeFormat={global.Intl.DateTimeFormat}
                textFieldStyle={{width: '100%'}}
                okLabel="OK"
                cancelLabel="Отменить"
                locale="ru-Ru"
                style={{display: 'inline-block', width: '40%'}}
                dialogContainerStyle={{zIndex: 9999}}
              />
              <TimePicker
                format="24hr"
                hintText="Время"
                textFieldStyle={{width: '100%'}}
                style={{display: 'inline-block', width: '40%'}}
                dialogStyle={{zIndex: 9999}}
              />
            </div>  
            <TextField
              id="opponent"
              floatingLabelText="Соперник"
              onChange={this.handleChangeText}
              value={this.state.opponent}
            />
            <TextField
              id="venue"
              floatingLabelText="Место"
              onChange={this.handleChangeText}
              value={this.state.venue}
            />
            <div style={{width: '100%',display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', margin: '20px 0'}}>
              <RaisedButton style={{width: '45%', marginRight: '10px'}} type="submit" label="Создать" primary={true} />
              <RaisedButton style={{width: '45%'}} onClick={() => {this.handlePlayerDelete()}} label="Отмена" secondary={true} />
            </div>
          </div>
        </form>
      </div>
    )
  }
};


class CreateEventForm extends React.Component {
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
        type: 'training',
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
    console.log('pam pam pam', this.props.dispatch)
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
      type: value
    })
  }
  render() {
    const PopoverStyle = {
      width: '100%',
    };
    const { firstName, secondName, email } = this.props;
    return (
      <div style={{width: '100%'}}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Игра" value="game" >
              <GameForm handleSubmit={this.handleSubmit}/>
            </Tab>  
            <Tab label="Тренировка" value="training" >
              <GameForm handleSubmit={this.handleSubmit}/>
            </Tab>  
          </Tabs>
      </div>
    );
  }
}

export default connect()(CreateEventForm);
