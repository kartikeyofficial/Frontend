// import React from 'react'

import "./App.css";
import FoodItems from "./components/FoodsItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  
// let foodItems = [];
  let foodItems = ['Bhindi','Dal','Green Vegetables','Roti','Salad','Milk','Ghee'];
  return (
    <>
      <center className="container">
        <h1 className="heading">Healthy Food</h1>
        <ErrorMessage item={foodItems}></ErrorMessage>
        <FoodItems item={foodItems}></FoodItems>
      </center>
    </>
  );
}

export default App;
