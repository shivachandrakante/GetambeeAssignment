import React from "react";

const UserCard = (props) => {
  return (
    <div id={props.key} key={props.key}>
      <h1>{props.Name}</h1>
      <h4>{props.User}</h4>
      <p>{props.updatedAt}</p>
      <p>{props.Date}</p>
      <p>{props.changes}</p>
    </div>
  );
};
export default UserCard;
