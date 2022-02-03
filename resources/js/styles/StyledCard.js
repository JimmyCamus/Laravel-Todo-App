import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.width ? props.width : "50%"};
  margin: 20px 0px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.backgroundColor};

  @media screen and (max-width: 540px) {
    & {
      width: 95%;
    }
  }
`;

export default StyledCard;
