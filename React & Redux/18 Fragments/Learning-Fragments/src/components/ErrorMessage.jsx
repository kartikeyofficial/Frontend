const ErrorMessage= ()=>{
//let foodItems = [];
  let foodItems = ['Dal','Green Vegetables','Roti','Salad','Milk','Ghee'];

   return <>{foodItems.length === 0 ? <h3 className="if">I am Still Houngry!</h3>: null}
   </>
}
export default ErrorMessage;