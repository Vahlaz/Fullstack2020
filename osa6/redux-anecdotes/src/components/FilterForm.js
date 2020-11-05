import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const FilterForm = (props) => {
	const style = {
		marginBottom: 10,
	}

	const handleChange = (event) => {
		props.filter(event.target.value)
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

const mapDispatchToProps = {
	filter,
}

const ConnectedFilterForm = connect(null, mapDispatchToProps)(FilterForm)
export default ConnectedFilterForm
