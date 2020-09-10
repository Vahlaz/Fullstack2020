import React from 'react'
import removePerson from './persons'

const RemoveButton = ({person, setPersons, persons}) => {
  const handleClick=() =>{
    console.log('button clicked', person)
    if( window.confirm(`delete ${person.name}?`)){
      removePerson.removePerson(person.id)
      setPersons(persons.filter(bruh => bruh.id!== person.id))
    }
  }

  return(
    <>
      <button onClick ={handleClick}>delete</button>
    </>
  )
}

const Content = ({ persons , setPersons}) => {
  const map1 = persons.map(person =>
  <li key = {person.id}>
    {person.name} {person.number} <RemoveButton person = {person} setPersons = {setPersons} persons = {persons}/>
  </li>
  )
  return (
    <div>
        {map1}
    </div>
  )
}
export default Content