import React, { useEffect, useState } from "react";
import "./myStyle.css";
import Content from "./Content";

import { Routes, Route, useParams, Link } from "react-router-dom";

function Main() {
  const [pages, setpages] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    getPages();
  }, []);

  const getPages = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const countt = Math.trunc(data.count / 21);

        const allpages = [];
        for (let i = 1; i <= countt; i++) allpages.push(i);
        setpages(allpages);
      });
  };

  return (
    <div className="container">
      <div className="heading">Pokedex</div>

      <Content pageNo={activePage} />
      <div className="pagess">
        <div className="pagination">
          {pages.map((page) => {
            return (
              <div
                key={page}
                className={`page ${page === activePage ? "btn-active" : ""}`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
