import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import DrawerLeft from './DrawerLeft';
import { grey50 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { signOut } from '../actions/signInUp';


const DropDownMenu = (props) => {
  const { signOut } = props;
  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreHorizIcon color={grey50} /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Сообщить о проблеме" />
      <MenuItem 
        primaryText="Выйти" 
        onTouchTap={()=>{signOut()}}
      />
    </IconMenu>
  );
};

class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  handleSignOut() {
    const { dispatch } = this.props;
    dispatch(signOut())
  }
  render() {
    const { title } = this.props;
    return (
      <div style={{width: "100%"}}>
        <AppBar
          title={title}
          titleStyle={{fontWeight: "100"}}
          iconElementLeft={<DrawerLeft />}
          iconElementRight={<DropDownMenu signOut={this.handleSignOut.bind(this)} />}
        />
      </div>
    );
  }
}

export default connect()(TopBar);


