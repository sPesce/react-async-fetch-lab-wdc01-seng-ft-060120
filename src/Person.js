import React from "react"

const Person = (props) =>
{
  const {name,craft} = props.person;
  return( 
    <ul>
        <li>{name}</li>
        <li>Craft: {craft}</li>
    </ul>
  );
}

export default Person;