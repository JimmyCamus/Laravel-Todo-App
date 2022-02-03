import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px 15px;
  background: transparent;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 60px;
  font-size: 18px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.primary};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.secondary};
    box-shadow: 0 0 10px #658db8;
  }
`;

export default StyledInput;
