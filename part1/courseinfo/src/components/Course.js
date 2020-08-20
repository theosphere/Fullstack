import React from 'react'

const Course = ({course}) => (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />
      <Total parts={course.parts} />
    </div>
)
  
const Header = ({course}) => (
    <h1>{course}</h1>
)
  

const Content = ({course}) => (
    <div>
    {course.map(crs => <Part key={crs.id} part={crs}/>)}
    </div>
)

const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)

  
const Total = ({parts}) => {

    const total = parts.reduce((s,l) => s += l.exercises, 0) 

    return (
        <p><b>Total of {total} exercises</b></p>
    )

}

export default Course