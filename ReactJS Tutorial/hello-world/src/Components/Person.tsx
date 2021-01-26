import React from "react";

interface Person {
  id: number;
  name: string;
  age: number;
  skill: string;
}

let Person: React.FC<{ persons: Person[] }> = (props) => {
  const personList = props.persons.map((person) => (
    <h2>
      I am {person.name}, I am {person.age}. I know {person.skill}
    </h2>
  ));

  return <div>{personList}</div>;
};

export default Person;
