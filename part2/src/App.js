const Course = (props) => {
  console.log("Course props" + props)
  const { id, name, parts } = props.course
  console.log("COURSE id: " + id)
  console.log("COURSE name: " + name)
  console.log("COURSE parts array: " + parts)

  const sum = parts?.reduce(
    (sum, p) => sum + p.exercises,
    0,
  );
  console.log("sum: " + sum)
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {parts?.map(part =>
          <p key={part.id}>{part.name} {part.exercises}</p>
        )}
      </div>
      <div>
        Total of {sum} exercises
      </div>
    </div>   
  )
}

const Courses = (props) => {
  console.log("Courses props" + props)
  const { id, name, courses } = props.courses
  
  return ( 
    <div>
      <h1>{name}</h1>
      <div>
        {courses?.map(course => 
          <p key={course.id}> {course.name}  </p>
          )} 
        <Course course={course} />
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
      return <Courses courses={courses} />
    </div>
  )
}

export default App