import React from 'react'

const LogOutButton = ({setUser}) => {
    const handleLogOut = (event) => {
        window.localStorage.removeItem('LoggedBlogAppUser')
        setUser(null)
    }

    return ( 
        <div>
            <button onClick = {handleLogOut}>Logout</button>
        </div>
    )
}


export default LogOutButton