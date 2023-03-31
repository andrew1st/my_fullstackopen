import { useState } from 'react'

const StatisticLine = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  /*USE STATISTICS COMPONENT OUTSIDE OF MAIN APP FOR DISPLAYING: ALL, AVERAGE, & POSITIVE PERCENT*/
const Statistics = (props) => {
  
  if (props.all === 0){
    return (
      <div>
      <h1> Statistics </h1>
      <p> No Feedback Given </p>
      </div>
    )
  }
  return ( 
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodPressed = goodVal => {
    console.log("Good Value New:", goodVal)
    setGood(goodVal)
  }

  const neutralPressed = neutralVal => {
    console.log("neutral Value New:", neutralVal)
    setNeutral(neutralVal)
  }

  const badPressed = badVal => {
    console.log("bad Value New:", badVal)
    setBad(badVal)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => goodPressed(good + 1)} text="good"/>
      <Button handleClick={() => neutralPressed(neutral + 1)} text="neutral"/>
      <Button handleClick={() => badPressed(bad + 1)} text="bad"/>
      
      <Statistics good={good} neutral={neutral} bad={bad} all={good + bad + neutral} average={(good-bad)/(good + bad + neutral)} positive={good / (good + bad + neutral) * 100 + "%"} />
    </div>
  )
}

export default App