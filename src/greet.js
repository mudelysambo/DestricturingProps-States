import React from "react";

const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name} A.K.A {heroName}
      </h1>
    </div>
  );
};

export default Greet;
