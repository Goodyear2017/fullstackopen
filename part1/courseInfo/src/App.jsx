const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}
const Part=(props) => {
  return (
    <p>{props.part}{props.exercise}</p>
  )
}
const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part part={props.part.name} exercise={props.part.exercises} />
      
    </>
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises  
      {
      props.exercise.reduce((sum, value)=>sum+value)}</p>
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
  const ex_array=[part1.exercises, part2.exercises,part3.exercises]  
  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={part1} />
      <Content part={part2} exercise={part2} />
      <Content part={part3} exercise={part3} />
      <Total exercise={ex_array} />
    </div>
  )
}

export default App