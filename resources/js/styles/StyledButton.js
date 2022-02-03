import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};

  &:hover {
    transition: all 0.5s ease;
    color: ${(props) => props.backgroundColor};
    background-color: ${(props) => props.color};
  }
`;

export default StyledButton;
