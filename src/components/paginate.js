import React from "react";

function paginate(data) {
  const itemsPerPage = 24;
  const noOfPages = Math.ceil(data.length / itemsPerPage);
  const pageData = new Array(noOfPages).fill(0);
  const newData = pageData.map((curr, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  console.log(newData);
  return newData;
}

export default paginate;
