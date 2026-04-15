import TodoItem from "./TodoItem";
const TodoItems = ({todoItems})=>{
  return (
    <div>
    {todoItems.map((item)=>(
      <TodoItem> todoDate={item.date} todoName={item.name}</TodoItem>
    ))}
    </div>
  )
}
export default TodoItems; 