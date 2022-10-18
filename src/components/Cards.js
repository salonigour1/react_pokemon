import React from "react";
import { Link } from "react-router-dom";

function Cards({ name, url, id }) {
  //   console.log(id);
  return (
    <div className="card">
      <p>{name}</p>

      <Link to={`id/${id}`} className="card_button">
        More details
      </Link>
    </div>
  );
}

export default Cards;
