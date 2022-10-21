import React, { useEffect, useState } from "react";
import { useFetch2 } from "../context/useFetch2";
import Cards from "./Cards";

function Pokemons2() {
  const { loading, data, page, setPage } = useFetch2();

  const [totalCount, setTotalCount] = useState(20);
  const itemsPerPage = 24;
  const noOfPages = Math.ceil(totalCount / itemsPerPage);
  console.log(data);
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=$0&limit=20";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((allData) => {
        setTotalCount(allData.count);
      });
  }, []);

  const handlePageNo = (index) => {
    setPage(index);
  };
  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };
  const handleNext = () => {
    if (page + 1 < noOfPages) setPage(page + 1);
  };

  return loading ? (
    <div className="loadingg">...loading</div>
  ) : (
    <>
      <div className="main">
        {data.map((card, index) => {
          return (
            <Cards
              key={index}
              {...card}
              id={page * data.length + (index + 1)}
            />
          );
        })}
      </div>
      {/* ======================pagination================= */}
      <div className="pagess">
        <div className="pagination">
          <button className="page" onClick={handlePrev}>
            prev
          </button>
          {[...Array(noOfPages)].map((curr, index) => {
            return (
              <button
                onClick={() => {
                  handlePageNo(index);
                }}
                key={index}
                className={`page ${index === page ? "btn-active" : ""}`}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="page" onClick={handleNext}>
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default Pokemons2;
