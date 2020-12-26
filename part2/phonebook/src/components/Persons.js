import React from 'react'
import DeleteButton from './DeleteButton'

const Persons = ({persons, searchName, setPersons}) => {

    let searched = persons.filter(e => e.name.toLowerCase().includes(searchName.toLowerCase()))
    return searched.map(e => <p key={e.id}>{e.name} {e.number} <DeleteButton id={e.id} persons={persons} setPersons={setPersons} /></p>)
}

export default Persons