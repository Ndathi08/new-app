import React from "react";
import Grandchild from "./Grandchild";


const Child = ({ name }: NameProps) => {
  return (
    <div>
      <h3>Child: {name}</h3>
      <Grandchild name={`${name}'s Great Grandchild`} />
    </div>
  );
};

export default Child;
