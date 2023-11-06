const CourseParts = (props) => {
  console.log("CourseParts props" , props)
  const { id, name, parts } = props.course
  console.log("PARTS id: " , id)
  console.log("PARTS name: " , name)
  console.log("EX. num: " , parts)

  const sum = parts?.reduce(
    (sum, p) => sum + p.exercises,
    0,
  );
  console.log("sum: " + sum)
  return (
    <div>
      <h2>{name}</h2>
      {parts?.map(part =>
        <p key={part.id}>{part.name} {part.exercises}</p>
      )}
      <b>Total of {sum} exercises</b>
    </div>   
  )
}

const Courses = (props) => {
  console.log("Courses props" , props)
  const { courses } = props
  
  return ( 
    <div>
      {courses?.map(course =>
        <CourseParts key={course.id} course={course}/>
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App