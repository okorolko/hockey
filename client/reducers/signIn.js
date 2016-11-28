export const signIn = (state = {submitting: false}, action) => {
	switch (action.type) {
    case 'SIGNING_IN':
      return Object.assign({}, state, {
        submitting: true,
				signedIn: false,
      })
		case 'SIGN_IN_SUCCESS':
			return Object.assign({}, state, {
        submitting: false,
				signedIn: true,
			})
    case 'SIGN_IN_ERROR':
			return Object.assign({}, state, {
        submitting: false,
				signedIn: false,
			})
		default: return state
	}
}