import StyledH1 from "../styles/StyledH1";

const Logo = ({ children }) => {
  return (
    <div>
      <StyledH1>{children}</StyledH1>
    </div>
  );
};

export default Logo;
