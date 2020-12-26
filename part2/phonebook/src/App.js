import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons.js'
import Notification from './components/Notification'

const App = () => {

  const notify = true
  const warn = false
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  const [messageStyle, setMessageStyle] = useState(null)
  
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {setPersons(initialPersons)})
  }, [])

  console.log('render', persons.length, 'persons')

  const addPerson= (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if (persons.find(e => e.name === newName) === undefined) {

      personService
      .create(personObject)
      .then(response => setPersons(persons.concat(response)))
      setMessageStyle(notify)  
      setErrorMessage(`${personObject.name} was added to the phonebook`)        
      setTimeout(() => { setMessageStyle(null)},
                           5000)

      setNewName('')
      setNewNumber('')
    
    }

    else {

      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with the new one?`)){
        
        let target = persons.find(e => e.name === newName)
        let temp_array = [...persons]
        

        personService
        .update(target.id, personObject)
        .then(response => {
          temp_array.splice(response.id-1, 1, response)
          setPersons(temp_array)})
        .catch(error => {
          setMessageStyle(false)  
          setErrorMessage(`Information of ${target.name} has already been removed from server`)        
          setTimeout(() => { setMessageStyle(warn)},
                             5000)
          setPersons(persons.filter(e => e.id !== target.id))
                            
         })

        setNewName('')
        setNewNumber('')
  
      }

    } 

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={errorMessage} messageStyle={messageStyle}/>

      <Filter searchName={searchName} handleSearchName={handleSearchName} />

      <h3>Add a new</h3>

      <div>
      <PersonForm 
        addPerson={addPerson}
        handlename={handleNameChange}
        handlenumber={handleNumberChange}
        namestate={newName}
        numberstate={newNumber}
      />
      </div>

      <h3>Numbers</h3>

      <Persons persons={persons} searchName={searchName} setPersons={setPersons} />

    </div>
  )
}

export default App
