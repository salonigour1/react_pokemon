import React, { useEffect, useState } from "react";
import paginate from "./paginate";

function useFetch() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const main_url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1500`;

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(main_url)
      .then((response) => response.json())
      .then((allData) => {
        // setCount(allData.count);
        setData(paginate(allData.results));
        setLoading(false);
      });
  };
  console.log(data);
  return { loading, data };
}

export default useFetch;
