import React, { useEffect, useState } from "react";

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

  const getFlatData = () => {
    flats.forEach((flat) => {
      console.log(flat.nazwa);
    });
    console.log(flats);
  };

  return (
    <>
      <button onClick={getFlatData}>Pokaz</button>
    </>
  );
};

export default FlatList;
