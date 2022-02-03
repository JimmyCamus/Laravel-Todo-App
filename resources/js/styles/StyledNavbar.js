import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onPrimary};
`;

export default StyledNavbar;
