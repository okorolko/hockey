import React from 'react';
import { connect } from 'react-redux';
import ManagePlayers from '../components/ManagePlayers';
import { fetchPlayers, addPlayer } from '../actions/managePlayers';
import { browserHistory } from 'react-router';
import { editPlayerFinish } from '../actions/managePlayers';

class ManagePlayersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchPlayers())
  }
  //dispatch editPlayerFinish to hide <BottomSnackbar/> 
  componentDidUpdate() {
    if (this.props.playerEdited) {
      setTimeout(() => {
        this.props.dispatch(editPlayerFinish())
      }, 3000);
    }
  }
  render() {
    return <ManagePlayers 
            teamPlayers={this.props.teamPlayers}
            playerEdited={this.props.playerEdited}
           />
  }
}

const MapStateToProps = (state) => {
  return {
    signedIn: state.signIn.signedIn,
    teamPlayers: state.teamPlayers,
    playerEdited: state.editPlayer.edited || false,
  };
};


export default connect(MapStateToProps)(ManagePlayersContainer);
