import React from "react";
import Person from "./Person";

let NameList = () => {
  //   const names = ["Bruce", "Clark", "Diana"];

  const persons = [
    {
      id: 1,
      name: "Shaan",
      age: 19,
      skill: "React",
    },
    {
      id: 2,
      name: "John",
      age: 27,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Doe",
      age: 4,
      skill: "Vue",
    },
  ];

  //   const personList = persons.map((person) => (
  //     <h2>
  //       I am {person.name}, I am {person.age}. I know {person.skill}
  //     </h2>
  //   ));

  const personList = persons.map((person) => (
    <Person person={person} key={person.id} />
  ));

  return (
    <div>
      {/* {names.map((name) => (
        <h1>{name}</h1>
      ))} */}

      {/* {personList} */}
      {persons}
    </div>
  );
};

export default NameList;
