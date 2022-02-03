import { useState, useEffect } from "react";
import { errorAlert } from "../utils/Alerts";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const response = await fetch("/api/getTodos");
    const data = await response.json();

    if (data.status != "success") {
      errorAlert("ERROR", data.message, "OK");
      return;
    }

    setTodos(data.todos);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoContent;
