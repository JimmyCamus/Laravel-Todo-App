import isLoggedin from "../utils/isLoggedin";
import TodoContent from "../components/TodoContent";

const HomePage = ({ user }) => {
  if (!isLoggedin(user)) {
    return null;
  }

  return (
    <div>
      <TodoContent />
    </div>
  );
};

export default HomePage;
