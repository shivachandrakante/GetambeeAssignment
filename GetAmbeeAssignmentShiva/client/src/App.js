import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import UserData from "./components/UserData/userData";
import PageBar from "./components/UserData/PageBar";
import { fetchData } from "./api/index";
const App = () => {
  const [data, setData] = useState([]);
  const [pageLimit, setPageLimit] = useState(25);
  const [pageNumber, setPageNumber] = useState(1);
  async function updateDate() {
    const updatedData = await fetchData();
    console.log(updatedData.data);
    setData((prevData) => [...updatedData.data]);
  }
  useEffect(() => {
    updateDate();
  }, []);
  function handlePageLimit(event) {
    console.log(event.target.value);
    setPageLimit(Number(event.target.value));
  }
  function handlePageChange(newPageNumber) {
    console.log(newPageNumber);
    setPageNumber(Number(newPageNumber));
  }
  return (
    <>
      <Form afterAdd={updateDate} />
      <select onChange={handlePageLimit}>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </select>
      <UserData data={data} pageLimit={pageLimit} pageNumber={pageNumber} />
      <PageBar
        handlePageChange={handlePageChange}
        dataLength={data.length}
        pageLimit={pageLimit}
      />
    </>
  );
};
export default App;
