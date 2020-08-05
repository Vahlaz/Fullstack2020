
import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const reducer =(accumulator, currentValue) => accumulator+currentValue.exercises
  console.log( course.parts.reduce(reducer,0))
  return(
    <p><b>Total of { course.parts.reduce(reducer,0)} exercises</b></p>
  ) 
}

const Content = ({ course }) => {
  const map1 = course.parts.map(parts =>( 
  <li key = {parts.name}>
    {parts.name +'  '+ parts.exercises}
  </li>))
  return (
    <div>
        {map1}
    </div>
  )
}

const Course = (props) => {
  console.log(props.courses.parts)
  return ( 
    <div>
    <Header course = {props.courses} />
    <Content course = {props.courses} />
    <Total course = {props.courses}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {name: 'Web development curriculum'},
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
      <Header course={courses[0]}/>
      <Course courses={courses[1]} />
      <Course courses={courses[2]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))