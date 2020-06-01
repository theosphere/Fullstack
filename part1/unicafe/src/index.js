import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const CreateTable = (props) => {
  let newarray = props.val
  return ( newarray.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.text}</td>
        <td>{element.value}</td>
      </tr>
    )
  }))
}

// before the tabel task I only used display to render elements, that's why
// the check for the boolean title is there

const Display = props => {

  if (props.title) {  
    return (
      <h1>{props.text} {props.value} </h1>
    )
  }
  return (
      <div>{props.text} {props.value} </div>
  )  
}

const Button = props => (

  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = (props) => {
  
  const cond = props.val[3].value
  if (cond === 0) {
    return ( <Display text={'No feedback given'} /> )
  } else { return (   
            <div>
              <table>
                <tbody>
                  <CreateTable val={props.val}/>
                </tbody>
              </table>
            </div>
    )
  }
}


const App = () => {
  // save clicks of each button to own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
    setAll(all+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)
  }

  let avg = (good - bad) / all
  let positive = good * 100 / all

  let titles = [ 
    {
      text:"give feedback",
      title: true
    },
    {
      text:"statistics",
      title: true
    }
]
  let stats = [
    {
      value: good,
      text:"good",
      title: false
    },
    {
      value: neutral,
      text:"neutral",
      title: false
    },
    {
      value: bad,
      text:"bad",
      title: false
    },
    {
      value: all,
      text:"all",
      title: false
    },
    {
      value: avg,
      text:"average",
      title: false
    },
    {
      value: positive + "%",
      text:"positive",
      title: false
    }
  ]

  return (
    <div>
      <Display value={titles[0].text} title={titles[0].title} />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Display value={titles[1].text} title={titles[1].title} />
      <Statistics val={stats}/>      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)