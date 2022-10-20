import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>
        
      <div className="toppings">
        {toppings.map((topping) => (
          <Topping topping={topping} key={topping.name} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
