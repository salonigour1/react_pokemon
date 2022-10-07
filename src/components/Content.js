import React, { useState, useEffect } from "react";
import Details from "./Details";
import "./myStyle.css";
function Content(props) {
  const [data, setData] = useState([]);
  const [visibility, setVisibility] = useState({ status: true, url: "" });

  useEffect(() => {
    getData();
  }, []);

  const handleVisibilty = () => {
    setVisibility(true);
  };
  const handleCancel = (index) => {
    const url = data[index].url;
    setVisibility({ status: false, url: "" });
  };
  const handleOpen = (index) => {
    const url = data[index].url;
    setVisibility({ status: true, url: url });
    console.log(visibility.status);
  };

  console.log("sd");
  const getData = () => {
    const offset = (props.pageNo - 1) * 21;

    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=21`)
      .then((response) => response.json())
      .then((allData) => {
        setData(allData.results);
      });
    console.log(data);
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
        url={"https://pokeapi.co/api/v2/pokemon/2/"}
        visible={true}
        onCancel={() => handleCancel()}
      ></Details>
    </div>
  );
}

export default Content;
