import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [toppingsState, setToppingsState] = useState(toppings);
  
  const handleCheckChange = (index, changedChecked) => {
    let newToppings = [...toppingsState];
    newToppings[index].selected = changedChecked;
    setToppingsState(newToppings);
  }

  let toppingsSelectedCount = 0;
  toppingsState.forEach((topping) => toppingsSelectedCount += topping.selected);

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingsSelectedCount}, total price: 0 Euro</p>
        
      <div className="toppings">
        {toppingsState.map((topping, index) => (
          <Topping 
          topping={topping} 
          key={topping.name} 
          onSelectedToppings={(changedChecked) => handleCheckChange(index, changedChecked)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
