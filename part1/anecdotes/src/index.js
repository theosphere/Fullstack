import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MaxVotes = (props) => {
  
  let arr = props.count
  let i = arr.indexOf(Math.max(...arr))
  let quote = props.quotes[i]
  let votes = arr[i]
  
  return (
    <>
    <div>
      {quote}
    </div>
    <div> 
      has {votes} votes
    </div>
    </>
  )
}

const Votes = (props) => {

  let arr = props.count
  let i = props.index
  let votes = arr[i]

  return (
    <> 
      has {votes} votes
    </>
  )

}

const App = (props) => {
  
  const [selected, setSelected] = useState(0)
  const [counter, setCounter] = useState([0, 0, 0 , 0 , 0, 0])

  const getRandomNo = () => {
    let randomNo = Math.floor((Math.random() * anecdotes.length));
    return randomNo
  }


  const handleVoteClick = () => {
    let index = selected
    const copy = [...counter]
    copy[index] += 1
    setCounter(copy)
  }

  const handleAnecdoteClick = () => {
    let index
    do {
      index = getRandomNo()
    }
    while (index === selected)
    console.log(index)
    setSelected(index)  
  }

  return (
    <>
    <h1>Anecdote of the day</h1>
    <div>   
      {props.anecdotes[selected]}
    </div>
    <div>
      <Votes count={counter} index={selected}/>
    </div>
    <div>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleAnecdoteClick}>random anecdote</button>      
    </div>
    <h1>Anecdote with most votes</h1>
    <div>
      <MaxVotes count={counter} quotes={anecdotes} index={selected}/>
    </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
