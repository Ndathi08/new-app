import React from "react";
import Child from "./Child";


const Parent = ({ name }: NameProps) => {
  return (
    <div>
      <h2>Parent: {name}</h2>
      <Child name={`${name}'s Grandchild`} />
    </div>
  );
};

export default Parent;
