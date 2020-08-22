import React from 'react'
import SingleCountry from './SingleCountry'

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
      <SingleCountry countries = {showAll}/>
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
    
export default Content