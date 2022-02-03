import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
            <Todo todo={todo} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
