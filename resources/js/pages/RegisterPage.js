import { useNavigate } from "react-router-dom";
import isLoggedin from "../utils/isLoggedin";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = ({ user }) => {
  const navigate = useNavigate();
  if (isLoggedin(user)) {
    navigate("/");
  }

  return (
    <div style={{ height: "100%" }}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
