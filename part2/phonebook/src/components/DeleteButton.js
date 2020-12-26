import React from 'react'
import personService from '../services/persons.js'


const DeleteButton = ({id, persons, setPersons}) => {

  const handleDelete = () => {

    if (window.confirm(`Are you sure you want to delete ${persons.find(e => e.id === id).name}`)){

        personService
        .deletePerson(id)
        .then(() => setPersons(persons.filter(e => e.id !== id)))

    }
  }

  return (<button key={id} onClick={handleDelete}> Delete</button>)    
}

export default DeleteButton