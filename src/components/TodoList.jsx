import TodoItem from "./TodoItem";



const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <div className="bg-white rounded-b-md rounded-t-md [&>article]:px-4 mt-8">
      
      {todos.map((todo)=> (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      ))}
      
     
      
    </div>
  );
};

export default TodoList;
