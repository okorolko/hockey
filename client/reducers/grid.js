

const initialState = {
		1: [
				{		
				fieldId: 'LF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'CF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'LD',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RD',
				playerId: '',
				playerName: ''
				},
		],
		2: [
				{		
				fieldId: 'LF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'CF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'LD',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RD',
				playerId: '',
				playerName: ''
				},
			],
			3: [
				{		
				fieldId: 'LF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'CF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'LD',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RD',
				playerId: '',
				playerName: ''
				},
			],
			4: [
				{		
				fieldId: 'LF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'CF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RF',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'LD',
				playerId: '',
				playerName: ''
				},
				{		
				fieldId: 'RD',
				playerId: '',
				playerName: ''
				},
		]			
}	


export const grid = (state = initialState, action) => {
	switch (action.type) {
		case 'ASSIGN_PLAYER':
			return Object.assign({}, state, {
				[action.lineId]: state[action.lineId].map((elem) => {
					if(elem.fieldId !== action.fieldId) return elem
		
					elem.playerName = action.playerName;
					return elem
				})
			})
		case 'RESTORE_PLAYER':
			return Object.assign({}, state, {
				[action.lineId]: state[action.lineId].map((elem) => {
					if(elem.fieldId !== action.fieldId) return elem
					
					elem.playerName = '';
					return elem
				})
		})
		default: return state
	}
}