import React from 'react'


const Filter = ({persons, setNewSearch}) => {
  const HandleSearchChange = (event) =>{
    setNewSearch(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }
  const handleSubmit= (event) => {
    event.preventDefault()
  }

  return ( 
    <form onSubmit = {handleSubmit}> 
    <div>
      search: 
       <input 
      onChange={
        HandleSearchChange}/>
    </div>
  </form>
  )
}

export default Filter