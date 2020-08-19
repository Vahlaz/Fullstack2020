
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

const App = ({courses}) => {
  return (
    <div>
      <Header course={courses[0]}/>
      <Course courses={courses[1]}/>
      <Course courses={courses[2]}/>
      <Course courses={courses[3]}/>
    </div>
  )
}

ReactDOM.render(<App courses = {courses} />, document.getElementById('root'))