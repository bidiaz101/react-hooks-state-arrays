import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    setFoods([...foods, newFood])
  }

  function handleLiClick(id){
    const newFoods = foods.map(foodObj => foodObj.id===id ? {...foodObj, heatLevel: foodObj.heatLevel+1} : foodObj)
    setFoods(newFoods)
  }

  function handleSelect(event){
    setFilter(event.target.value)
  }

  const filteredFoods = foods.filter((foodObj) => {
    if (filter === "All") {
      return true;
    } else {
      return foodObj.cuisine === filter;
    }
  });

  const foodLis = filteredFoods.map(foodObj=> <li key={foodObj.id} onClick={() => handleLiClick(food.id)}>{foodObj.name}, Cuisine: {foodObj.cuisine}, Heat Level: {foodObj.heatLevel}</li>)

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleSelect}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodLis}</ul>
    </div>
  );
}

export default SpicyFoodList;
