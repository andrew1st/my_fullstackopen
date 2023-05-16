import { useState } from 'react'

const NewButton = (props) => {
  return (
    <button onClick={props.newAnecdote}>
      {props.text}
    </button>
  )
} 

const VoteButton = (props) => {
  return (
    <button onClick={props.voteAnecdote}>
      {props.text}
    </button>
  )
} 

const AnecdoteText = (props) => {
  return (
    <p>has {props.numVotes} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const n = anecdotes.length

  // let initialVotes = Array(n).fill(0)
  // const [vselected, vsetSelected] = useState(initialVotes)
  const [allVotes, setAllVotes] = useState([])

  const [votesdisplay, setVotesDisplay] = useState(0)
  const [selected, setSelected] = useState(0)

  const randomIdx = rdmIn => {
    const new_i = Math.floor(Math.random() * rdmIn)
    setSelected(new_i)
    console.log("new_i: " + new_i)

    let tmpVotesNum = 0
    let i = 0
    for(i=0; i < allVotes.length; i++){
      if (allVotes[i] === new_i){
      tmpVotesNum += 1  
      // console.log("NEW I:" + new_i + " | vote found (index allVotes)- " + i)
      }
    }
    // console.log("final tmpvotesnum: " + tmpVotesNum)
    setVotesDisplay(tmpVotesNum)
  }

  const voteAnec = idxIn => {
    // TODO!! Need to figure out how to handle state of votes array(?)
    let allVotesCopy = [...allVotes]
    allVotesCopy.push(idxIn)
    setAllVotes(
      allVotesCopy
    )
    console.log("allVotesCopy: " + allVotesCopy)
    setVotesDisplay(votesdisplay + 1)

    // TODO!! initialVotes and/or vselected needs to be set properly...
  }

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <AnecdoteText numVotes={votesdisplay}/>
      <VoteButton voteAnecdote={() => voteAnec(selected)} text="vote"/>
      <NewButton newAnecdote={() =>  randomIdx(n)} text="next anecdote" />
    </div>
  )
}

export default App