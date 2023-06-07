const Course = (props) => {
  console.log(props)
  const { id, name, parts } = props.course
  console.log("COURSE id: " + id)
  console.log("COURSE name: " + name)
  console.log("COURSE parts: " + parts)


  return (
    <div>
      <h1>{name}</h1>
      <div>
        {parts?.map(part =>
          <p key={part.id}>{part.name} {part.exercises}</p>
        )}
      </div>
    </div>   
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return <Course course={course} />
}

export default App