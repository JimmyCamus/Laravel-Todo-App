import styled from "styled-components";

const StyledTodoText = styled.p`
  text-decoration: ${(props) => props.status ? "line-through" : "none"};
`;

export default StyledTodoText;
