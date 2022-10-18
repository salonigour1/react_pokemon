import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PokemonDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  useEffect(() => {
    getDetails();
  }, []);

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
        setLoading(false);
      });
  };

  return loading ? (
    <div className="loadingg">...Loading</div>
  ) : (
    <>
      <div className="details">
        <Link to="/" className="cross">
          <ion-icon name="close-outline"></ion-icon>
        </Link>
        <h1>{details.name}</h1>
        <img src={details.img} />
        <p className="pokemon height">height : {details.height} meter</p>
        <p className="pokemon weight">weight : {details.weight} pound</p>
        <p className="pokemon moves">Total moves : {details.moves}</p>
      </div>
    </>
  );
}

export default PokemonDetail;
