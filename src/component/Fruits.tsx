import React from 'react';

const Fruits = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
