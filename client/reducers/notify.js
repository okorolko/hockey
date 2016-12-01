export const notify = (state = {open: false, message: ''}, action) => {
	switch (action.type) {
    case 'EDIT_PLAYER_SUCCESS':
      return Object.assign({}, state, {
        open: true,
				message: 'Информация обновлена',
      })
    case 'ADD_PLAYER_SUCCESS':
      return Object.assign({}, state, {
        open: true,
				message: 'Новый игрок добавлен',
      })
    case 'DELETE_PLAYER_SUCCESS':
      return Object.assign({}, state, {
        open: true,
				message: 'Игрок удален',
      })
    case 'HIDE_NOTIFICATION':
    return Object.assign({}, state, {
      open: false,
      message: '',
    })
		default: return state
	}
}

