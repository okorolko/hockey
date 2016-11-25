import React from 'react';
import Header from './Header';
import wrapper from '../style/common/wrapper';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ManagePlayersPopUp from './ManagePlayersPopUp';

const ManagePlayers = () => {
  return (
    <div style={wrapper}>
      <Header title={'Управление учетными записями'} />
      <ManagePlayersPopUp />
    </div>
  )
}

export default ManagePlayers;
