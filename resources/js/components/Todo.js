import { useTheme } from "styled-components";
import TodoContainer from "../containers/TodoContainer";
import Button from "./Button";
import StyledCard from "../styles/StyledCard";
import StyledTodoText from "../styles/StyledTodoText";

const Todo = ({ todo, setTodos }) => {
  const theme = useTheme();

  const handleUpdateTodo = async (id, action) => {
    const form = new FormData();
    form.append("id", id);
    const response = await fetch(`/api/${action}Todo`, {
      method: "POST",
      body: form,
    });
    const data = await response.json();

    if (data.status != "success") {
      errorAlert("ERROR", data.message, "OK");
      return;
    }

    setTodos(data.todos);
  };

  return (
    <StyledCard width="50vw" theme={theme}>
      <TodoContainer>
        <div>
        <Button
            color={theme.primary}
            backgroundColor={theme.onPrimary}
            onClick={(e) => handleUpdateTodo(todo.id, "update")}
          >
            {todo.status ? "Undo": "Complete"}
          </Button>
        </div>
        <div style={{ width: "200px" }}>
          <StyledTodoText status={todo.status} >
            {todo.title}
          </StyledTodoText>
        </div>
        <div>
          <Button
            color={theme.error}
            backgroundColor={theme.onError}
            onClick={(e) => handleUpdateTodo(todo.id, "delete")}
          >
            Delete
          </Button>
        </div>
      </TodoContainer>
    </StyledCard>
  );
};

export default Todo;
