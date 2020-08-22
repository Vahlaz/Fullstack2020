import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

const formSubmitHandler = (event) => {
  event.preventDefault()
}

const handleSearchChange = (event) => {
  setNewSearch(event.target.value)
  setShowAll(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
  console.log(showAll)
}

return (
<div>
  <h1>Search</h1>
    <form onSubmit = {formSubmitHandler} >
      <input 
      onChange = {handleSearchChange}
      value  = {newSearch}
      />
      </form>
      
      <Content showAll = {showAll} setShowAll = {setShowAll} countries = {countries}/>

    </div>
  )
}

export default App;
