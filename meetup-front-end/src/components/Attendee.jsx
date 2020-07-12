import React from 'react';

const Attendees = ({person}) => {
  let beginner, inter, expert;
  if (person.skillLevel === "beginner") {
    beginner = `${person.firstName} ${person.lastName}`
  } else if (person.skillLevel === "intermediate") {
    inter = `${person.firstName} ${person.lastName}`
  } else if (person.skillLevel === "expert") {
    expert = `${person.firstName} ${person.lastName}`
  }
  return (
    <div>
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      <div>{beginner}</div>

      <h3>Intermediate</h3>
      <div>{inter}</div>

      <h3>Expert</h3>
      <div>{expert}</div>
  </div>
  )
}

export default Attendees;
