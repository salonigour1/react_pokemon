import "./myStyle.css";
import React, { useState, useEffect } from "react";

function Details({ url, visible, onCancel }) {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getDetails();
  }, [url]);

  const getDetails = () => {
    fetch(url)
      .then((response) => response.json())
      .then((allDetails) => {
        const pokemon = {
          id: allDetails.id,
          name: allDetails.name,
          img: allDetails["sprites"]["front_shiny"],
          height: allDetails.height,
          weight: allDetails.weight,
          moves: allDetails.moves.length,
        };

        setDetails(pokemon);
      });
  };

  return (
    <>
      <div className={`details ${visible ? "active" : ""}`}>
        <div
          onClick={() => onCancel()}
          className={`cross ${visible ? "active" : ""}`}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <h1>{details.name}</h1>
        <img src={details.img} />
        <p className="pokemon height">height : {details.height} meter</p>
        <p className="pokemon weight">weight : {details.weight} pound</p>
        <p className="pokemon moves">Total moves : {details.moves}</p>
      </div>
    </>
  );
}

export default Details;
