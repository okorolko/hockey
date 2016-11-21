	const initialState = {
	selectedPlayerId: '',
	selectedPlayerName: '',
	players: [
		{
		id: '1234123412341234',
		name: 'Dude Guschin',
		},	 
		{
		id: 'dsfgsdfg',
		name: 'Laban K',
		},	 
			{
		id: '123412341qwer2341234',
		name: 'Hillary Clinton',
		},	 
			{
		id: '12341233rgewer g412341234',
		name: 'Donald Trump',
		},	 
			{
		id: 'sdfg',
		name: 'Henry Ford',
		},	 
			{
		id: '34563456',
		name: 'Destroyer 3000',
		},	 
			{
		id: 'kgssss',
		name: 'Mikhail Ivanovich',
		},	 
		{
		id: 'kgss21asd123ss',
		name: 'V Putin',
		},
		{
		id: 'kgss21123ss22',
		name: 'Evgeniy Pluschenko',
		},
		{
		id: 'kgss2fds112ff3ss22',
		name: 'Bono',
		},
		{
		id: 'kgqwess2111223ss22',
		name: 'Tom Yorke',
		},
		{
		id: 'kgssff2111223ss22',
		name: 'Evgeniy Malkin',
		},					
	]
}

export const list = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_PLAYER':
			return Object.assign({}, state, {
				selectedPlayerId: action.playerId,
				selectedPlayerName: action.playerName
			})
		case 'ASSIGN_PLAYER':
			return Object.assign({}, state, {
				selectedPlayerId: '',
				selectedPlayerName: '',
				players: state.players.filter((elem) => {
					return elem.id !== action.playerId
				})
			})	
		case 'RESTORE_PLAYER':
		console.log(state.players, action)
			return Object.assign({}, state, {
				players: [{ 
					id: action.playerId,
					name: action.playerName
					 }].concat(state.players)
				})
		default: return state
	}
}