import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  };
  return (
    <AppContext.Provider value={{ loading, data, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useFetch2 = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
// const useFetch2 = () => {
//   const [data, setData] = useState();
//   const [page, setPage] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getData();
//   }, [page]);

//   const getData = () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data.results);
//         setLoading(false);
//       });
//   };
//   return { loading, data, page, setPage };
// };
