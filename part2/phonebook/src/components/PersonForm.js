import React from 'react'

const PersonForm = (props) => (

<form onSubmit={props.addPerson}>
    <div>
      name: <input value={props.namestate} onChange={props.handlename}/>
    </div>
    <div>
      number: <input value={props.numberstate} onChange={props.handlenumber}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
</form>

)

export default PersonForm