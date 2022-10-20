import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onSelectedToppings }) => {

  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onSelectedToppings}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
