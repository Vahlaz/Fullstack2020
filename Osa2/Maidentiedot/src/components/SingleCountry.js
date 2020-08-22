import React from 'react'
import ShowWeather from './ShowWeather'
const SingleCountry = ({countries}) =>{
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
      <ShowWeather capital = {countries[0].capital}/>
      </div>
      </>
      )
    }
export default SingleCountry