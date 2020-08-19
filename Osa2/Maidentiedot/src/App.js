import React, { useState, useEffect } from 'react'
import axios from 'axios'
  
const Weather = ({capital}) =>{
const [weather, setWeather] = useState([]) 
useEffect(() => {
  const params = {
    access_key: 'f58b50e39f33a1728bdd4b45da5203ec',
    query: capital
  }
  axios
    .get('http://api.weatherstack.com/current', {params})
    .then(response => {
      console.log(response.data)
    setWeather(response.data)
    
    })
}, [capital])
if(!weather.current) {
  return null
}
return(
  <div>
    <h2>Weather in {capital}:</h2>
    <b>Temperature:</b> {weather.current.temperature} ℃<br></br>
    <img src = {weather.current.weather_icons[0]}alt = "weather" widht="100"/><br></br>
    <b>wind</b> speed : {weather.current.wind_speed} direction : {weather.current.wind_dir}
  </div>
  )
}

const Country = ({countries}) =>{
return (
  <>
  <div> <h1>{countries[0].name}</h1> </div> 
  <div> capital: {countries[0].capital} </div>
  <div> populaton: {countries[0].population} </div>
  <div>
    <h2>Languages</h2>
     {countries[0].languages.map(language => (<li key={language.name}> 
  {language.name} 
  </li>))} 
  </div>
  <div> <img src={countries[0].flag } alt="flag" width="200"/>  </div> 
  <div> 
  <Weather capital = {countries[0].capital}/>
  </div>
  </>
  )
}

const ShowButton = ({ setShowAll, countries, name}) =>{
  const handleClick = () =>{
    setShowAll(countries.filter(country => country.name.includes(name)))
  }
  return(
  <button onClick = {handleClick}>show</button>
  )
}

const Content = ({ showAll , setShowAll, countries }) => {
let map1 = []

if ( showAll.length === 0){
  map1 =
  <div>
    <h1>Countries</h1>
    Type in the box to search
  </div>
}

else if(showAll.length === 1){
  map1 = 
  <> 
  <Country countries = {showAll}/>
  </>
}

else if(showAll.length <= 10 ){ 
    map1 = 
    <div>
    <h1>Countries</h1>
    {showAll.map(country =>( 
    <li key = {country.name}>
      {country.name} <ShowButton  setShowAll = {setShowAll}  countries = {countries} name = {country.name} />
    </li>)
    )}
    </div>

  }else {
    map1 = 
    <div>
    <h1>Countries</h1>
    too many matches
    </div>
  }

  return (
    <div>
      {map1}
    </div>
  )
}

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
