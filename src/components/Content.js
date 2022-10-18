import React, { useState, useEffect } from "react";

import Details from "./Details";
import "./myStyle.css";
// import { Routes, Route, useParams } from "react-router-dom";

function Content(props) {
  const [data, setData] = useState([]);
  const [visibility, setVisibility] = useState({ status: false, url: "" });

  // console.log(userId);

  useEffect(() => {
    getData();
  }, [data]);

  const handleCancel = () => {
    setVisibility({ status: false, url: "" });
  };
  const handleOpen = (index) => {
    const url = data[index].url;
    setVisibility({ status: true, url: url });
    console.log(visibility.status);
  };

  const getData = () => {
    const offset = (props.pageNo - 1) * 21;

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=21`)
      .then((response) => response.json())
      .then((allData) => {
        setData(allData.results);
        // console.log(allData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={`main`}>
      {data.map((curr, index) => {
        return (
          <div className="card" key={index + 1}>
            <p>{curr.name}</p>

            <button onClick={() => handleOpen(index)}>More details</button>
          </div>
        );
      })}

      <Details
        url={visibility.url}
        visible={visibility.status}
        onCancel={() => handleCancel()}
      ></Details>
    </div>
  );
}

export default Content;
