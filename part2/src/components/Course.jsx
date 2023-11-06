const CourseParts = (props) => {
  console.log("CourseParts props" , props)
  const { id, name, parts } = props.course
  console.log("PARTS id: " , id)
  console.log("PARTS name: " , name)
  console.log("PARTS EX. num: " , parts)
  
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
export default Courses