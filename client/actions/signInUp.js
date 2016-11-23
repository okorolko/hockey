import firebase from '../firebase/database';
const database = firebase.database();

export const signUpSuccess = () => {
  return {
    type: 'SIGN_UP_SUCCESS',
  };
};
export const signUpError = () => {
  return {
    type: 'SIGN_UP_ERROR',
  };
};
export const signingUp = () => {
  return {
    type: 'SIGNING_UP'
  }
}
export const signInSuccess = () => {
  return {
    type: 'SIGN_IN_SUCCESS',
  };
};
export const signInError = () => {
  return {
    type: 'SIGN_IN_ERROR',
  };
};
export const signingIn = () => {
  return {
    type: 'SIGNING_IN'
  }
}

export const signIn = (email, password) => {
    return function(dispatch) {
      dispatch(signingIn())
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
          console.log('!!!!!success!!!!')
          dispatch(signInSuccess())
        }).catch((error) => {
          console.log('!!!error!!!!', error, '--')
          dispatch(signInError())
      })
    }
  };

export const registerUser = (email, password, team, username) => {
    return function(dispatch) {
      dispatch(signingUp())
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
          console.log('!!!!!success!!!!')
          dispatch(signUpSuccess())
          createTeam(team, username, email)

        }).catch((error) => {
          console.log('!!!error!!!!', error, '--')
          dispatch(signUpError())
      })
    }
  };


function createTeam(team, username, email) {
  const userUID = firebase.auth().currentUser.uid;
  firebase.database().ref(`teams/${team}-${userUID}`).set({
    username,
    email,
  });
}