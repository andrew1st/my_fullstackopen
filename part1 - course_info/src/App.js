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

/*const Content = (props) => {
  console.log(props)
  
  return (
    <div>
      <Part part_name={props.part1_name} part_exs={props.part1_exs}/>
      <Part part_name={props.part2_name} part_exs={props.part2_exs}/>
      <Part part_name={props.part3_name} part_exs={props.part3_exs}/>
    </div>
  )
}*/

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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Part part_name={part1.name} part_exs={part1.exercises} />
      <Part part_name={part2.name} part_exs={part2.exercises} />
      <Part part_name={part3.name} part_exs={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App