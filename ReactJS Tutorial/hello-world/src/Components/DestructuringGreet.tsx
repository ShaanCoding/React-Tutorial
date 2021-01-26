import React from "react";

const GreetDestructured: React.FC<{ name: string; heroName: string }> = (
  props
) => {
  const { name, heroName } = props;

  return (
    <div>
      <h1>
        Hello {name} aka {heroName}
      </h1>
    </div>
  );
};

export default GreetDestructured;
