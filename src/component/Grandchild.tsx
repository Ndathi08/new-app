import React from "react";

const Grandchild = ({ name }: NameProps) => {
  return (
    <div>
      <p>Grandchild: {name}</p>
    </div>
  );
};

export default Grandchild;
