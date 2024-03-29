import React, { useState } from 'react';
import Mwiki from './Mwiki';
const PropDrilling = () => {
    const[people, setPeople] = useState("The people from Mwiki are Friendly");
  return <Mwiki people = {people}/>;
  
}

export default PropDrilling;