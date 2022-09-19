import React from "react";

const PageBar = (props) => {
  console.log(
    "check",
    props.dataLength,
    props.pageLimit,
    Math.ceil(Number(props.dataLength / props.pageLimit))
  );
  let pageArraySize = Math.ceil(Number(props.dataLength / props.pageLimit));
  let pages = [...Array(pageArraySize).keys()].map((item) => (
    <button key={item + 1} name={item + 1}>
      {item + 1}
    </button>
  ));
  function handleClick(event) {
    props.handlePageChange(event.target.name);
    console.log(event);
  }
  return <div onClick={handleClick}>{pages}</div>;
};
export default PageBar;
