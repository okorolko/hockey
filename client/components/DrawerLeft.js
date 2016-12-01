import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router';
import { grey50 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';



export default class DrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }  

  handleClose() {
    this.setState({ open: false })
  }  

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleToggle.bind(this)}><Menu color={grey50} /></IconButton>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar 
            iconStyleLeft={{display: "none"}}
            title={"Hockey Reminder"}
            titleStyle={{fontWeight: '100'}}
          />
          <Link to={'/managetasks'}><MenuItem onTouchTap={this.handleClose.bind(this)}>Управление событиями</MenuItem></Link>
          <Link to={'/manageplayers'}> <MenuItem onTouchTap={this.handleClose.bind(this)}>Команда</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}
