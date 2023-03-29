import { useState } from 'react'

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  /* NEED TO FIND OUT HOW TO PROPERLY PASS NEW VALUES FOR GOOD AND BAD 
  FOR AVERAGE AND PERCENT CALCULATIONS */
  const goodPressed = goodVal => {
    console.log("Good Value New:", goodVal)
    setGood(goodVal)
    setAverage((goodVal - bad) / (all + 1))
    setPositive(goodVal/ (all + 1) * 100 + "%") 
    setAll(all + 1)
  }

  const neutralPressed = neutralVal => {
    console.log("neutral Value New:", neutralVal)
    setNeutral(neutralVal)
    setAverage((good - bad) / (all + 1))
    setPositive(good/ (all + 1) * 100 + "%") 
    setAll(all + 1)
  }

  const badPressed = badVal => {
    console.log("bad Value New:", badVal)
    setBad(badVal)
    setAverage((good - badVal) / (all + 1))
    setPositive(good / (all + 1) * 100 + " %")
    setAll(all + 1)
  }



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => goodPressed(good + 1)} text="good"/>
      <Button handleClick={() => neutralPressed(neutral + 1)} text="neutral"/>
      <Button handleClick={() => badPressed(bad + 1)} text="bad"/>
      <h1>Statistics</h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad}/>
      <Display text="all" value={all} />
      <Display text="average" value={average} />
      <Display text="positive" value={positive}/>
    </div>
  )
}

export default App