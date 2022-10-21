import React from "react";
import Navbar from "../components/Navbar";
import Pokemon from "../components/Pokemon";
import Pokemons2 from "../components/Pokemons2";

function home() {
  return (
    <div>
      <Navbar />
      {/* <Pokemon /> */}
      <Pokemons2 />
    </div>
  );
}

export default home;
