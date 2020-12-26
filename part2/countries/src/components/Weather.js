import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {

const api_key = process.env.REACT_APP_API_KEY
const city = props.city
const [weather, setWeather] = useState([])
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

useEffect(() => {
    axios
    .get(`${url}`)
    .then(response => {
      let temp = []
      temp.push(response.data.weather[0].description, Math.round((response.data.main.temp - 273.15)).toString().concat("\xB0 Celsius"))
      
      setWeather(temp)
    }) 
    }, [url])

    
return <ul>{weather.map((e,i) => <li key={i}>{e.charAt(0).toUpperCase() + e.slice(1)}</li> )}</ul>

}

export default Weather;