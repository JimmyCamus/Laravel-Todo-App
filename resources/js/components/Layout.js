import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, user, setUser }) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <div style={{ "minHeight": "850px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
