import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import {useHandleLogout} from "../hooks/useHandleLogout";
import StyledNavbar from "../styles/StyledNavbar";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = ({ user, setUser }) => {
  const theme = useTheme();
  const handleLogout = useHandleLogout();

  return (
    <div>
      <StyledNavbar theme={theme}>
        <div style={{ padding: "0 10px" }}>
          <Link to="/">
            <Logo>Todo App</Logo>
          </Link>
        </div>
        <div style={{ padding: "0 10px" }}>
          {user.name ? (
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <h3>{user.name}</h3>
              <Button
                backgroundColor={theme.primary}
                color={theme.onPrimary}
                borderColor={"none"}
                onClick={() => handleLogout(setUser)}
              >
                LOGOUT
              </Button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Link to="/login">
                <Button
                  backgroundColor={theme.primary}
                  color={theme.onPrimary}
                  borderColor={"none"}
                >
                  LOGIN
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  backgroundColor={theme.primary}
                  color={theme.onPrimary}
                  borderColor={"none"}
                >
                  REGISTER
                </Button>
              </Link>
            </div>
          )}
        </div>
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
