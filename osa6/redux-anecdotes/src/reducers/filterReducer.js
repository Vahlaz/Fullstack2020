export const filter = (search) => {
	return {
		type: 'FILTER',
		data: search,
	}
}

const reducer = (state = '', action) => {
	switch (action.type) {
		case 'FILTER':
			const changedState = action.data
			return changedState
		default:
			return state
	}
}

export default reducer
