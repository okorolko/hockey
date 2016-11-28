import firebase from '../firebase/database';
import { signInError } from './signInUp'

//ADD ALL AJAX STAGES

export const fetchPlayersSuccess = (payload) => {
  return {
    type: 'FETCH_PLAYERS_SUCCESS',
    payload
  };
};
export const fetchPlayersError = () => {
  return {
    type: 'FETCH_PLAYERS_ERROR',
  };
};
export const fetchingPlayers = () => {
  return {
    type: 'FETCHING_PLAYERS'
  }
}


export const fetchPlayers = () => {
  return function(dispatch) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/teams/' + userId).once('value')
          .then(function(snapShot) {
            const teamPlayers = snapShot.val().teamPlayers
            dispatch(fetchPlayersSuccess(teamPlayers))
          }).catch(function(error) {
              console.log('something went wrong', error)      
          });  
      }
    });
    
  };
};


export const addPlayer = (data) => {
  return function(dispatch) {
    const userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/teams/' + userId).once('value')
    .then(() => {
      const playerInfo = {
        firstName: data.playerFirstName,
        secondName: data.playerSecondName,
        position: data.position,
        email: data.playerEmail,
      };

      firebase.database().ref('/teams/' + userId + '/teamPlayers').push(playerInfo)
      .then(() => {
        dispatch(fetchPlayers())
      });
    }).catch(function(error) {
        console.log('something went wrong', error)      
    });
  };
};


export const editPlayersSuccess = () => {
  return {
    type: 'EDIT_PLAYER_SUCCESS',
  };
};
export const editPlayersError = () => {
  return {
    type: 'EDIT_PLAYER_ERROR',
  };
};
export const editingPlayer = () => {
  return {
    type: 'EDITING_PLAYER',
  };
};
export const editPlayerFinish = () => {
  return {
    type: 'EDIT_PLAYER_FINISH',
  };
};

export const editPlayer = (data) => {
  return function(dispatch) {
    const userId = firebase.auth().currentUser.uid;
    dispatch(editingPlayer())
    return firebase.database().ref('/teams/' + userId).once('value')
    .then(function() {
      const playerInfo = {
        firstName: data.playerFirstName,
        secondName: data.playerSecondName,
        position: data.position,
        email: data.playerEmail,
      };
       firebase.database().ref().child(`/teams/${userId}/teamPlayers/${data.id}`).set(playerInfo)
    }).then(() => {
      dispatch(editPlayersSuccess())
      dispatch(fetchPlayers())
    })
  };
}

export const deletePlayer = (data) => {
  return function(dispatch) {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref().child(`/teams/${userId}/teamPlayers/${data.id}`).remove()
  };
}
