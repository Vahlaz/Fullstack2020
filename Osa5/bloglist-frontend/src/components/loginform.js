import React, { useState } from 'react'
import loginService from '../services/loginService'
import blogService from '../services/blogs'
const Loginform = ({ setUser, setMessage, setError }) => {
	const [username, setUsername] = useState([])
	const [password, setPassword] = useState([])

	const loginHandler = async (event) => {
		event.preventDefault()
		console.log('trying to log in with', username, 'and ', password)
		try {
			const user = await loginService.login({
				username,
				password,
			})
			if (user) {
				window.localStorage.setItem('LoggedBlogAppUser', JSON.stringify(user))
				blogService.setToken(user.token)
				setUsername('')
				setPassword('')
				setUser(user)
			} else {
				setUsername('')
				setPassword('')
			}
		} catch (e) {
			console.log('bruh')
			setError('wrong username or password')
			setTimeout(() => {
				setError(null)
			}, 5000)
			setUsername('')
			setPassword('')
		}
	}

	return (
		<div>
			<form onSubmit={loginHandler}>
				<div>
					username
					<input
						id='username'
						type='text'
						value={username}
						name='Username'
						onChange={({ target }) => setUsername(target.value)}
					/>
				</div>
				<div>
					password
					<input
						id='password'
						type='password'
						value={password}
						name='Password'
						onChange={({ target }) => setPassword(target.value)}
					/>
				</div>
				<button id ="login-button" type='submit'>login</button>
			</form>
		</div>
	)
}

export default Loginform
