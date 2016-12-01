export const teamPlayers = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS_SUCCESS':
      return action.payload;
    case 'FETCH_PLAYERS_ERROR':
      return Object.assign({}, state, {
        submitting: false,
      });
    case 'FETCHING_PLAYERS':
      return Object.assign({}, state, {
        submitting: false,
      });
    default: return state;
  }
};
