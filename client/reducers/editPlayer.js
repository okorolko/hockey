export const editPlayer = (state = {}, action) => {
	switch (action.type) {
  case 'EDIT_PLAYER_SUCCESS':
    return Object.assign({}, state, {
       editing: false,
       edited: true,
    });
  case 'EDITING_PLAYER':
    return Object.assign({}, state, {
      editing: true,
      edited: false,
    })
  case 'EDIT_PLAYER_ERROR':
    return Object.assign({}, state, {
      editing: false,
      edited: false,
    })
	default: return state
	}
}