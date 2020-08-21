import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import axios from 'axios'

const Content = ({ persons }) => {
  const map1 = persons.map(parts =>( 
  <li key = {parts.name}>
    {parts.name + ' ' + parts.number}
  </li>))
  return (
    <div>
        {map1}
    </div>
  )
}

const Filter = ({persons, setNewSearch}) => {
  const HandleSearchChange = (event) =>{
    console.log(event.target.value)
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

const NewPersonForm = ({persons, setPersons,newName, setNewName, newNumber, setNewNumber}) =>{
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked')
    const newPersonObject = {
      name: newName,
      number: newNumber
    }
    const found = persons.findIndex(element => element.name === newName)
    console.log(found)

    if (found >= 0 )  {
      window.alert(`${newName} is already added to phonebook`)
    }else if (found === -1){
    setPersons(persons.concat(newPersonObject))
    setNewName('')
    setNewNumber('')
    console.log(persons)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

return(
  <form onSubmit={addName}>
  <div> name:
    <input 
    value = {newName} 
    onChange={handleNameChange}/> 
    </div>
    <div> 
      Number: 
      <input 
      value = {newNumber}
      onChange = {handleNumberChange}/>
      </div>
    <div>
    <button type="submit">add</button>
  </div>
  </form>
  )
}
=======
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'
import Content from './components/Content'
import personService from './components/persons'
>>>>>>> 246774c9868387f62cc4ca9d7ae554ea728563ab

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState([])

useEffect(() =>{
personService
.getAll()
.then(response =>{ 
  setPersons(response.data)
})
},[])

useEffect(()=> {
  setNewSearch(persons)
},[persons])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons = {persons} setNewSearch = {setNewSearch}/>
      <h2>Add a new</h2>
      <NewPersonForm persons = {persons} setPersons={setPersons} newName = {newName} setNewName={setNewName} newNumber = {newNumber} setNewNumber = {setNewNumber}  />
      <h2>Numbers</h2>
      <Content  persons = {newSearch} setPersons = {setPersons} setNewSearch = {setNewSearch} />
    </div>
  )
}

export default App