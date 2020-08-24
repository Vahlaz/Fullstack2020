import React from 'react';
import ReactDOM from 'react-dom';
import Courses from './components/courses';

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

const Course = ({courses}) => {
  console.log(courses)
  const course = courses.map(course => 
    <div key = {course.id}>
    <Header course = {course}/> 
    <Content course = {course}/>
    <Total course = {course}/>
    </div>
  )
  return ( 
    <>
      {course}
    </>
  )
}

const App = ({courses}) => {
  console.log(courses)
  return (
    <>
      <Course courses={courses}/>
    </>
  )
}

ReactDOM.render(<App courses = {Courses} />, document.getElementById('root'))