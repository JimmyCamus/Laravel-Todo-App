import { useNavigate } from "react-router-dom";
import { useHandlerForm } from "../hooks/useHandleForm";
import { successAlert, errorAlert } from "../utils/Alerts";
import Form from "./Form";

const RegisterForm = () => {
  const handlerForm = useHandlerForm();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    const data = await handlerForm(e, "/api/register");

    if (data.status == "success") {
      navigate("/login");
      successAlert("Registration Complete", "You can login", "go to login");
      return;
    }

    errorAlert("Error", data.message, "OK");
  };
  return (
    <div>
      <Form
        title="Register Form"
        buttonText="Register"
        inputs={[
          { name: "username", type: "text", placeholder: "Username" },
          { name: "email", type: "email", placeholder: "Email" },
          { name: "password", type: "password", placeholder: "Password" },
        ]}
        handleSubmit={handlerSubmit}
      />
    </div>
  );
};

export default RegisterForm;
