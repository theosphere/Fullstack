import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Weather from './components/Weather';


const Filter = (props) => {

  return (
   <div>
  find countries <input value={props.searchCountry} onChange={props.handleSearchCountry}/>
  </div>

  )

}

const Search = (props) => {

  const searched = props.countries.filter(e => e.name.toLowerCase().includes(props.searchCountry.toLowerCase()))

  return <ProcessCountries countries={searched} setShowState={props.setShowState}/>

}

const DisplayC = ({output}) => {

 return ( 
 <div>
  <div>
    <h1>{output.name}</h1>
  </div>
  <p>capital {output.capital}</p>
  <p>population {output.population}</p> 
  <ul>{output.languages.map((e,i) => <li key={i}>{e.name}</li> )}</ul>
  <div>
  <img src={output.flag} height={100} width={150} alt="flag logo"></img>
  <h4> Current Weather </h4>
  <Weather city={output.capital} />
  </div>
 </div>
 )
}



const ShowButton = ({country, setShowState}) => {

  let display = () => {
  setShowState(country)
  }

  return (
  <button key={country.id} onClick={display}> Show</button>
  )
}



const ProcessCountries = ({countries, setShowState}) => {

    countries.forEach((e, i) => e.id = i )
    
    let countriesInfo = countries.map(e => ({id: e.id, name: e.name, capital: e.capital, population: e.population,
                                             languages: e.languages, flag: e.flag }))

    if(countries.length>10) return <p>Too many matches, specify another filter</p>

    else if (countries.length === 1) return <DisplayC key={countriesInfo[0].id} output = {countriesInfo[0]} />

         else return countriesInfo.map(e => <p key={e.id}>{e.name} <ShowButton country={e.name.toLowerCase()} setShowState={setShowState}/></p>)

        
} 

const App = () => {

  const [countries, setCountries] = useState([])
  const [ searchCountry, setSearchCountry ] = useState('')
  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value)
  }

  const displayOnClick = (el) => {
    
    setSearchCountry(el)        
  }

 

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
    }, [])

    

  return (
    <div>
      
      <Filter searchCountry={searchCountry} handleSearchCountry={handleSearchCountry} />

      <Search searchCountry={searchCountry} countries={countries} setShowState={displayOnClick}/>


    </div>
  )
}

export default App;
