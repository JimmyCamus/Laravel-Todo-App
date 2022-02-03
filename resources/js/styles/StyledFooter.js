import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
`;

export default StyledFooter;
