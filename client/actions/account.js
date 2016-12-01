import firebase from '../firebase/database';

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

export const checkAuth = () => {
    return function(dispatch, getState) {
      //dispatch(signingIn())
      console.log('user acc:', getState().account.user)
      if (!getState().account.user) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            dispatch(signInSuccess());
            console.log('success')
          } else {
            dispatch(signInError());
          };
        });
      } else {
        dispatch(signInSuccess());
      }
    }
  };