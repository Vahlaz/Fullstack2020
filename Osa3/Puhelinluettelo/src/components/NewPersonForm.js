import React from 'react'
import personService from './persons'



const NewPersonForm = ({persons, setPersons,newName, setNewName, newNumber, setNewNumber, setMessage ,setErrorMessage}) =>{
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked')
    const newPersonObject = {
      name: newName,
      number: newNumber
    }

    const changedPerson = persons.find(person => person.name === newName)
    if (changedPerson)  {
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with new one?`)){
        changedPerson.number = newNumber
        console.log(changedPerson)
        personService.replaceNumber({changedPerson}).then(
        setPersons(persons.map(person => person.id!==changedPerson.id ? person : changedPerson))
        )
        .catch(
          error => {
            setErrorMessage(`${newName} has already been removed from the server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)

          }
        )
        setNewName('')
        setNewNumber('')
      }
    }else{
    personService.postPersons({newPersonObject})
    .then(response => {
      setPersons(persons.concat(response.data))
      console.log(response.data)
      setNewName('')
      setNewNumber('')
      console.log(persons)
      console.log(response)
      setMessage(`added ${newName}`)
      setTimeout(()=> {
      setMessage(null)
    },3000 )
    })
    .catch((error) => {
      console.log(error.response.data)
      setErrorMessage(`${error.response.data.error}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    })
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
  <div> name: <input 
    value = {newName} 
    onChange={handleNameChange}/> </div>
    
    <div> Number: <input 
      value = {newNumber}
      onChange = {handleNumberChange} /> </div>
   
    <div>
    <button type="submit">add</button>
  </div>
  </form>
  )
}

export default NewPersonForm