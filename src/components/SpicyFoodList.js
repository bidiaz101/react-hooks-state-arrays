import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    setFoods([...foods, newFood])
  }

  function handleLiClick(id){
    const newFoods = foods.filter(foodObj => foodObj.id!==id)
    setFoods(newFoods)
  }

  const foodLis = foods.map(foodObj=> <li key={foodObj.id} onClick={() => handleLiClick(food.id)}>{foodObj.name}, Cuisine: {foodObj.cuisine}, Heat Level: {foodObj.heatLevel}</li>)

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodLis}</ul>
    </div>
  );
}

export default SpicyFoodList;
