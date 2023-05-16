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

const MostVotesPanel = (props) => {
  return (
    <div>
    <h1>Anecdote with Most Votes</h1>
    <p>{props.MostVotesAnecText}</p>
    <p>has {props.maxVotes} votes</p>
    </div>
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

  const [allVotes, setAllVotes] = useState([])
  const [votesdisplay, setVotesDisplay] = useState(0)
  const [selected, setSelected] = useState(0)

  // state variables for storing max votes data:
  // -) index/anecdote of item with most votes
  // -) number of votes for anecdote
  const [maxvotes_idx, setMaxVotes_Idx] = useState(0)
  const [maxvotesnum, setMaxVotesNum] = useState(0)

  const randomIdx = rdmIn => {
    const new_i = Math.floor(Math.random() * rdmIn)
    setSelected(new_i)
    console.log("new_i: " + new_i)

    //COUNT HOW MANY VOTES WITHIN allVotes for new_i value
    let tmpVotesNum = 0
    let i = 0
    for(i=0; i < allVotes.length; i++){
      if (allVotes[i] === new_i){
      tmpVotesNum += 1  
      }
    }
    setVotesDisplay(tmpVotesNum)
  }

  const voteAnec = idxIn => {
    let allVotesCopy = [...allVotes]
    allVotesCopy.push(idxIn)
    setAllVotes(
      allVotesCopy
    )
    console.log("allVotesCopy: " + allVotesCopy)
    setVotesDisplay(votesdisplay + 1)

    let maxVotesNum_tmp = votesdisplay + 1
    // SET MAX VOTES
    if (votesdisplay + 1 >= maxvotesnum){
      
      setMaxVotes_Idx(idxIn)
      setMaxVotesNum(maxVotesNum_tmp)
    }
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <br />
      <AnecdoteText numVotes={votesdisplay}/>
      <VoteButton voteAnecdote={() => voteAnec(selected)} text="vote"/>
      <NewButton newAnecdote={() =>  randomIdx(n)} text="next anecdote" />
      <MostVotesPanel MostVotesAnecText={anecdotes[maxvotes_idx]} maxVotes={maxvotesnum} />
    </div>
  )
}

export default App