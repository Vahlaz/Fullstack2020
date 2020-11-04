import React from 'react'

import { useDispatch } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const FilterForm = () => {
	const style = {
		marginBottom: 10,
	}
	const dispatch = useDispatch()
	const handleChange = (event) => {
		dispatch(filter(event.target.value))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<div style={style}>
			filter:
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div>
					<input type='text' name='search' />
				</div>
			</form>
		</div>
	)
}

export default FilterForm
