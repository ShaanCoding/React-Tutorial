import React from "react";

interface Person {
  id: number;
  name: string;
  age: number;
  skill: string;
}

let Person: React.FC<{ person: Person }> = (props) => {
  return (
    <div>
      <h1>
        I am {props.person.name}, I am {props.person.age} years old and I have
        the skill of {props.person.skill}
      </h1>
    </div>
  );
};

export default Person;
