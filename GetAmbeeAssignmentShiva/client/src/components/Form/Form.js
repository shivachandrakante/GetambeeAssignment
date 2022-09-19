import React, { useState } from "react";
import { postData } from "./../../api/index";
const defaultState = {
  Name: "",
  User: "",
  Date: "",
  changes: 0,
};
const Form = (props) => {
  const [formData, setFormData] = useState(defaultState);
  function handleChangeInput(event) {
    const { name: field, value: val } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [field]: val,
    }));
    console.log(event);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData((prevState) => ({
      ...defaultState,
    }));
    let res = await postData(formData);
    res
      .then(() => {
        props.afterAdd();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>User</label>
      <input
        name="User"
        value={formData.User}
        onChange={handleChangeInput}
        type="text"
      ></input>
      <br />
      <br />
      <label>Name</label>
      <input
        name="Name"
        type="text"
        value={formData.Name}
        onChange={handleChangeInput}
      ></input>
      <br />
      <br />
      <label>Date</label>
      <input
        name="Date"
        type="date"
        value={formData.Date}
        onChange={handleChangeInput}
      ></input>
      <br />
      <br />
      <label>changes</label>
      <input
        name="changes"
        type="Number"
        value={formData.changes}
        onChange={handleChangeInput}
      ></input>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
