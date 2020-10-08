import React, { useState } from 'react'
import loginService from '../services/loginService'
import blogService from '../services/blogs'
const Loginform =({setUser})=> {
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])

    const loginHandler = async (event) => {
        event.preventDefault()
        console.log('trying to log in with', username , 'and ', password)
        try {
            const bruh = await loginService.login({
              username, password,
            })
            window.localStorage.setItem('LoggedBlogAppUser', JSON.stringify(bruh))
            blogService.setToken(bruh.token)
            setUsername('')
            setPassword('')
            setUser(bruh)
          } catch {
              console.log('bruh')
          }
    }

return (
    <div>
        <h1>Login to application</h1>
        <form onSubmit={loginHandler}>
            <div>
                username
                <input 
                type = "text"
                value = {username}
                name = "Username"
                onChange = {({target}) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                type = "password"
                value = {password}
                name = "Password"
                onChange = {({target})=> setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
    </div>
    )
}

export default Loginform