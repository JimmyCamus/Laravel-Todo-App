import Form from "./Form";
import { useHandlerForm } from "../hooks/useHandleForm";
import { errorAlert } from "../utils/Alerts";

const TodoForm = ({setTodos}) => {
  const handlerForm = useHandlerForm();

  const handleSubmit = async (e) => {
    const data = await handlerForm(e, "/api/addTodo");

    if (data.status != "success") {
      errorAlert("ERROR", data.message, "OK");
      return;
    }

    setTodos(data.todos);
  };

  return (
    <div style={{ width: "100%" }}>
      <Form
        title="Add Todo"
        buttonText="Add"
        inputs={[{ name: "title", type: "text", placeholder: "Todo" }]}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default TodoForm;
