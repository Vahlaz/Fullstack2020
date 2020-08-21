import React, {useState, useEffect} from 'react'
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'
import Content from './components/Content'
import personService from './components/persons'

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