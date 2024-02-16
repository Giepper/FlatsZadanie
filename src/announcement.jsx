import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5rem;
`;
const StyledAnnoucement = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  border: 1px solid red;
`;
const StyledImgContainer = styled.div`
  width: 40%;
  height: 200px;
`;
const StyledInfoContainer = styled.div`
  width: 60%;
  height: 100%;
`;

const Announcement = () => {
  return (
    <>
      <StyledContainer>
        <StyledAnnoucement>
          <StyledImgContainer></StyledImgContainer>
          <StyledInfoContainer></StyledInfoContainer>
        </StyledAnnoucement>
      </StyledContainer>
    </>
  );
};

export default Announcement;
