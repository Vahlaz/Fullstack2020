import React, {useState, useEffect} from 'react'
import NewPersonForm from './components/NewPersonForm'
import Filter from './components/Filter'
import Content from './components/Content'
import personService from './components/persons'

const Message=({message})=>{
  if(message === null){
return null
  }
  return(
    <div className = "success">
      {message}
    </div>
  )
}

const Notification = ({errorMessage})=> {
  if (errorMessage === null) {
    return null
  }
  return (
    <div className="error">
      {errorMessage}
    </div>
  )
}


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ message, setMessage ] = useState(null)

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
      <Notification errorMessage={errorMessage}/> <Message message={message}/>
      <Filter persons = {persons} setNewSearch = {setNewSearch}/>
      <h2>Add a new</h2>
      <NewPersonForm persons = {persons} setPersons={setPersons} newName = {newName} setNewName={setNewName} newNumber = {newNumber} setNewNumber = {setNewNumber} setMessage={setMessage} setErrorMessage={setErrorMessage}  />
      <h2>Numbers</h2>
      <Content  persons = {newSearch} setPersons = {setPersons} setNewSearch = {setNewSearch} />
    </div>
  )
}

export default App