export const signIn = (state = {submitting: false}, action) => {
	switch (action.type) {
    case 'SIGNING_IN':
      return Object.assign({}, state, {
        submitting: true
      })
		case 'SIGN_IN_SUCCESS':
			return Object.assign({}, state, {
        submitting: false
			})
    case 'SIGN_IN_ERROR':
			return Object.assign({}, state, {
        submitting: false
			})
		default: return state
	}
}