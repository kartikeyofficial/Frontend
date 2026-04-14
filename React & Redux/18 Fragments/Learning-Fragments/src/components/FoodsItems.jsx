import Item from "./Item";

const FoodItems =()=>{
  //let foodItems = [];
  let foodItems = ['Dal','Green Vegetables','Roti','Salad','Milk','Ghee'];

   return (
   <ul className="list-group">
          {foodItems.map((item) => (
           <Item key={item} foodItems={item}></Item>
          ))}
        </ul>
        );
}
export default FoodItems;