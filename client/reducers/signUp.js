
export const signUp = (state = {submitting: false}, action) => {
	switch (action.type) {
    case 'SIGNING_UP':
      return Object.assign({}, state, {
        submitting: true
      })
		case 'SIGN_UP_SUCCESS':
			return Object.assign({}, state, {
        submitting: false
			})
    case 'SIGN_UP_ERROR':
			return Object.assign({}, state, {
        submitting: false
			})
		default: return state
	}
}