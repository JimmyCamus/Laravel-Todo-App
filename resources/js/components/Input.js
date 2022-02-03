import { useTheme } from "styled-components";
import StyledInput from "../styles/StyledInput";

const Input = ({ name, placeholder, type }) => {
  const theme = useTheme();
  return (
    <div>
      <StyledInput
        name={name}
        placeholder={placeholder}
        type={type}
        theme={theme}
        required
      />
    </div>
  );
};

export default Input;
