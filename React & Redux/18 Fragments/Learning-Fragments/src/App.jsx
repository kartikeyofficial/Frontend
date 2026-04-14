// import React from 'react'

import "./App.css";
import FoodItems from "./components/FoodsItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  

  let foodItems = ['Dal','Green Vegetables','Roti','Salad','Milk','Ghee'];
  return (
    <>
      <center className="container">
        <h1 className="heading">Healthy Food</h1>
        <ErrorMessage></ErrorMessage>
        <FoodItems></FoodItems>
      </center>
    </>
  );
}

export default App;
