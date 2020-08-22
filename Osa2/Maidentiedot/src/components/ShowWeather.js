import React , {useEffect, useState} from 'react'
import axios from 'axios'

const ShowWeather = ({capital}) =>{
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
    
export default ShowWeather