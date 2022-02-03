import HomeContent from "../components/HomeContent";
import isLoggedin from "../utils/isLoggedin";
import TodoContent from "../components/TodoContent";

const HomePage = ({ user }) => {
  if (!isLoggedin(user)) {
    return <HomeContent />;
  }

  return (
    <div>
      <TodoContent />
    </div>
  );
};

export default HomePage;
