import { useTheme } from "styled-components";
import StyledFooter from "../styles/StyledFooter";

const Footer = () => {
  const theme = useTheme();
  return (
    <div style={{marginTop: "50px"}}>
      <StyledFooter theme={theme}>
        <h3>Made by Jimmy Camus</h3>
      </StyledFooter>
    </div>
  );
};

export default Footer;
