import StyledButton from "../styles/StyledButton";

const Button = ({ children, color, backgroundColor, borderColor, onClick}) => {
  return (
    <div>
      <StyledButton
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;
