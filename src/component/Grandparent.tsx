import React from "react";
import Parent from "./Parent";


const Grandparent = ({ name }: NameProps) => {
  return (
    <div>
      <h1>Grandparent: {name}</h1>
      <Parent name={`${name}'s Child`} />
    </div>
  );
};

export default Grandparent;
