import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import BuyMilk from "./Components/BuyMilk";
import GoToSchool from "./Components/GoToSchool";
import "./App.css";
function App(){
  return (<center class='todo-container'>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <BuyMilk></BuyMilk>
    <GoToSchool></GoToSchool>
    
  

  </center>
  );
}
export default App;