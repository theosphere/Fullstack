import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  persons.forEach((e, i) => e.id = i + 1)

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  const addPerson= (event) => {
    event.preventDefault()
    
    if (persons.find(e => e.name === newName) === undefined) {

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    
    }

    else alert(`${newName} is already added to phonebook`)

  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
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

      <Filter searchName={searchName} handleSearchName={handleSearchName} />

      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson}
        handlename={handleNameChange}
        handlenumber={handleNumberChange}
        namestate={newName}
        numberstate={newNumber}
      />

      <h3>Numbers</h3>

      <Persons person={persons} searchName={searchName}/>

    </div>
  )
}

export default App
