import { useTheme } from "styled-components";
import FormContainer from "../containers/FormContainer";
import Button from "./Button";
import Input from "./Input";
import StyledCard from "../styles/StyledCard";
import StyledH1 from "../styles/StyledH1";

const Form = ({ title, buttonText, inputs, handleSubmit }) => {
  const theme = useTheme();

  return (
    <div style={{ height: "100%" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormContainer>
          <StyledH1>{title}</StyledH1>
          <StyledCard>
            {inputs.map((input) => (
              <Input
                key={input.name}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
              />
            ))}
            <Button
              backgroundColor={theme.onPrimary}
              color={theme.primary}
              borderColor={theme.primary}
            >
              {buttonText}
            </Button>
          </StyledCard>
        </FormContainer>
      </form>
    </div>
  );
};

export default Form;
