import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  font-style: italic;
  font-weight: bold;
  padding: 3rem;
`;
const Header = () => {
  return <StyledHeader>OLX dom</StyledHeader>;
};

export default Header;
