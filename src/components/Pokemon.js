import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Cards from "./Cards";
import Navbar from "./Navbar";
function Pokemon() {
  const { loading, data } = useFetch();
  const [activePage, setActivePage] = useState(2);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    if (loading) return;
    setPageData(data[activePage]);
  }, [loading, activePage]);

  const handleClick = (index) => {
    setActivePage(index);
  };
  const handlePrev = () => {
    if (activePage > 0) setActivePage(activePage - 1);
  };
  const handleNext = () => {
    if (activePage + 1 < data.length) setActivePage(activePage + 1);
  };
  // console.log(pageData);
  return (
    <>
      <h1>{loading ? "loading..." : ""}</h1>

      <div className="main">
        {pageData.map((card, index) => {
          return (
            <Cards
              key={index}
              {...card}
              id={activePage * pageData.length + (index + 1)}
            />
          );
        })}
      </div>
      {/* =========================== pagination ============================ */}
      {!loading && (
        <div className="pagess">
          <div className="pagination">
            <button onClick={handlePrev} className="page">
              prev
            </button>
            {data.map((curr, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`page ${index === activePage ? "btn-active" : ""}`}
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={handleNext} className="page">
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Pokemon;
