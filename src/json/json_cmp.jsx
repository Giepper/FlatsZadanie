import React, { useEffect, useState } from "react";

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
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  margin-top: 1rem;
  cursor: pointer;
`;
const StyledImgContainer = styled.div`
  width: 40%;
  height: 200px;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
const StyledInfoContainer = styled.div`
  width: 60%;
  height: 100%;
`;
const StyledInfoHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0 0 1rem;
`;
const StyledInfoName = styled.p`
  padding: 1rem 0 0 1rem;
`;
const StyledInfoPrice = styled.h2``;
const StyledInfoPricePerMeter = styled.p``;
const StyledInfoSize = styled.p`
  padding: 1rem 0 0 1rem;
`;

const FlatList = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import("./mieszkania.json");
        setFlats(response.default);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };
    fetchData();
  }, []);

  let name = [];
  let photo = [];
  let price = [];
  let size = [];
  let rooms = [];

  const Announcement = () => {
    flats.forEach((flat) => {
      name.push(flat.nazwa);
      photo.push(flat.zdjecie);
      price.push(flat.cena);
      size.push(flat.metraz);
      rooms.push(flat.pokoje);
    });
    return (
      <>
        <StyledContainer>
          {flats.map((content, idx) => (
            <StyledAnnoucement>
              <StyledImgContainer>
                <StyledImg src={photo[idx]} />
              </StyledImgContainer>
              <StyledInfoContainer>
                <StyledInfoHeaderContainer>
                  <StyledInfoPrice>{price[idx]} zł</StyledInfoPrice>
                  <StyledInfoPricePerMeter>
                    {(price[idx] / size[idx]).toFixed(2)} zł/m<sup>2</sup>
                  </StyledInfoPricePerMeter>
                </StyledInfoHeaderContainer>
                <StyledInfoName>{name[idx]}</StyledInfoName>
                <StyledInfoSize>
                  {rooms[idx]} pokoje | {size[idx]} m<sup>2</sup>
                </StyledInfoSize>
              </StyledInfoContainer>
            </StyledAnnoucement>
          ))}
        </StyledContainer>
      </>
    );
  };

  return (
    <>
      <Announcement />
    </>
  );
};

export default FlatList;
