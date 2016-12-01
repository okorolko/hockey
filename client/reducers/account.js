export const account = (state = { signedIn: true }, action) => {
  switch (action.type) {
    case 'SIGNING_IN':
      return setNewState(state, { user: false, submitting: true, });
    case 'SIGN_IN_SUCCESS':
      return setNewState(state, { user: true, submitting: false, });
    case 'SIGN_IN_ERROR':
      return setNewState(state, { user: false, submitting: false, });
    default: return state;
  }
};

function setNewState(initialState, newObject) {
  return Object.assign({}, initialState, newObject)
}