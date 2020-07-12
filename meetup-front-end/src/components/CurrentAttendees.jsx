import React from 'react';
import Beginners from './Beginners.jsx';
import Intermediates from './Intermediates.jsx';
import Experts from './Experts.jsx';

const CurrentAttendees = ({attendees}) => {

  const beginner = [];
  const inter = [];
  const expert = [];
  for (const person of attendees) {
    if (person.skillLevel === "beginner") {
      beginner.push(`${person.firstName} ${person.lastName}`)
    } else if (person.skillLevel === "intermediate") {
      inter.push(`${person.firstName} ${person.lastName}`)
    } else if (person.skillLevel === "expert") {
      expert.push(`${person.firstName} ${person.lastName}`)
    }
  }

  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {beginner.map((person,index) => <Beginners key={index} person={person}/>)}

      <h3>Intermediate</h3>
      {inter.map((person,index) => <Intermediates key={index} person={person}/>)}

      <h3>Expert</h3>
      {expert.map((person,index) => <Experts key={index} person={person}/>)}
    </div>
  )
}

export default CurrentAttendees;
//array