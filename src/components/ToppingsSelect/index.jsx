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
  let toppingsSelectedPrice = 0;
  toppingsState.forEach((topping) => {
    toppingsSelectedCount += topping.selected;
    topping.selected ? toppingsSelectedPrice += topping.price : null;
  });

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingsSelectedCount}, total price: {toppingsSelectedPrice} Euro</p>
        
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
