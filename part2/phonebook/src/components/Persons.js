import React from 'react'


const Persons = (props) => {

    //if (searchName !== '') {

    let searched = props.person.filter(e => e.name.toLowerCase().includes(props.searchName.toLowerCase()))

    return searched.map(e => <p key={e.id}>{e.name} {e.number}</p>)

    //else return null
}

export default Persons