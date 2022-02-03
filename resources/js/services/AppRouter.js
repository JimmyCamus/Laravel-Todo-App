import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const AppRouter = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage user={user} />} />
      <Route path="/register" element={<RegisterPage user={user} /> } />
      <Route path="/login" element={<LoginPage user={user} setUser={setUser} /> } />
    </Routes>
  );
};

export default AppRouter;
