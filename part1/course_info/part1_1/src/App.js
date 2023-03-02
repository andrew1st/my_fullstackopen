const Part = (props) => {
  console.log(props)
  return (
      <p>
        {props.part_name} {props.part_exs}
      </p>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  
  return (
    <div>
      <Part part_name={props.part1_name} part_exs={props.part1_exs}/>
      <Part part_name={props.part2_name} part_exs={props.part2_exs}/>
      <Part part_name={props.part3_name} part_exs={props.part3_exs}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1_name={part1} part1_exs={exercises1} part2_name={part2} part2_exs={exercises2} part3_name={part3} part3_exs={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App