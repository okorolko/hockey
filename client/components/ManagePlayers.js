import React from 'react';
import _ from 'lodash';
import Header from './Header';
import wrapper from '../style/common/wrapper';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ManagePlayersPopUp from './ManagePlayersPopUp';
import ManagePlayersPopUpExisting from './ManagePlayersPopUpExisting';
import Preloader from './Preloader';
import BottomSnackbar from './BottomSnackbar';
import TopBar from './TopBar';


const ManagePlayers = (props) => {
  const { teamPlayers, playerEdited, message } = props;
  let array = [];
  for (let key in teamPlayers) {
    array.push({
      key: key,
      playerFirstName: teamPlayers[key].firstName,
      playerSecondName: teamPlayers[key].secondName,
      playerEmail: teamPlayers[key].email,
      playerPosition: teamPlayers[key].position,
    })
  } 

  function updateArray(obj) {
    return Object.keys(obj).map(key => Object.assign({}, {key}, obj[key]));
  }
  const playersArray = updateArray(teamPlayers)

  let players;
  if (!Object.getOwnPropertyNames(teamPlayers).length > 0) {
    players = <Preloader />
  } else {
    players =  playersArray.map((elem) => {
                 return <ManagePlayersPopUpExisting 
                          key={elem.key}
                          id={elem.key}
                          firstName={elem.firstName}
                          lastName={elem.lastName}
                          email={elem.email}
                          position={elem.position}
                        />
                })
  }
    return (
        <div >
          <ManagePlayersPopUp />
          <br />
          {players}
        <BottomSnackbar />
        </div>
    )
  }

export default ManagePlayers;
