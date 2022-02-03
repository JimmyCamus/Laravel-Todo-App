import { useNavigate } from "react-router-dom";
import isLoggedin from "../utils/isLoggedin";
import LoginForm from "../components/LoginForm";

const LoginPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  if (isLoggedin(user)) {
    navigate("/");
  }

  return (
    <div style={{ height: "100%" }}>
      <LoginForm setUser={setUser} />
    </div>
  );
};

export default LoginPage;
