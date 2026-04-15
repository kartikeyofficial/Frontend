import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App(){

   const todoItems = [{
    name:'Buy Milk',
    date: '15/04/2026',
   },
   {
    name:'Go to College',
    date: '15/04/2026',
   },
  ]

  return (<center className='todo-container'>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
   
    
  </center>
  );
}
export default App;