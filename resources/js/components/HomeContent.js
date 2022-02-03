import StyledCard from "../styles/StyledCard";

const HomeContent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledCard>
        <h2>To start adding todos you have to be logged in</h2>
      </StyledCard>
    </div>
  );
};

export default HomeContent;
