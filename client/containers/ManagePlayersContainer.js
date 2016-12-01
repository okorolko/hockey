import React from 'react';
import { connect } from 'react-redux';
import ManagePlayers from '../components/ManagePlayers';
import { fetchPlayers, addPlayer } from '../actions/managePlayers';
import { browserHistory } from 'react-router';
import { signOut } from '../actions/signInUp';
import TopBar from '../components/TopBar';

class ManagePlayersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(fetchPlayers())
  }
  componentDidMount() {
    if(!this.props.signedIn) {
      browserHistory.push('/signin')
    }
  }
  componentDidUpdate() {
    if (!this.props.signedIn) {
      browserHistory.push('/signin')
    }
  }
  handleSignOut() {
    this.props.dispatch(signOut());
  }
  render() {
    return (
      <div>
        <ManagePlayers {...this.props} />
      </div>  
    )
  }
}

const MapStateToProps = (state) => {
  return {
    signedIn: state.signIn.signedIn,
    teamPlayers: state.teamPlayers,
    playerEdited: state.editPlayer.edited || false,
    message: state.notify.message
  };
};


export default connect(MapStateToProps)(ManagePlayersContainer);
