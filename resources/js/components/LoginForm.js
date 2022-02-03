import { useNavigate } from "react-router-dom";
import { useHandlerForm } from "../hooks/useHandleForm";
import { errorAlert } from "../utils/Alerts";
import Form from "./Form";

const LoginForm = ({ setUser }) => {
  const handlerForm = useHandlerForm();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    const data = await handlerForm(e, "/api/login");

    if (data.status == "success") {
      navigate("/");
      setUser({ name: data.user.name, email: data.user.email });
      return;
    }

    errorAlert("Error", data.message, "OK");
  };
  return (
    <div>
      <Form
        title="Login Form"
        buttonText="Login"
        inputs={[
          { name: "email", type: "email", placeholder: "Email" },
          { name: "password", type: "password", placeholder: "Password" },
        ]}
        handleSubmit={handlerSubmit}
      />
    </div>
  );
};

export default LoginForm;
