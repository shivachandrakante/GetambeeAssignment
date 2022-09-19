import React from "react";
import UserCard from "./../UI/user";
const UserData = (props) => {
  let { data } = props;
  data = data.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });
  const { pageLimit, pageNumber } = props;
  const retrievedData = [];
  console.log(typeof data);
  console.log(data.length === 0);
  for (
    let i = (pageNumber - 1) * pageLimit;
    i < pageLimit * pageNumber && i < data.length;
    i++
  ) {
    retrievedData.push(
      <UserCard
        key={data[i]["_id"]}
        Name={data[i]["Name"]}
        User={data[i]["User"]}
        updatedAt={data[i]["updatedAt"]}
        Date={data[i]["Date"]}
        changes={data[i]["changes"]}
      />
    );
  }
  console.log(typeof data);
  console.log(data);
  console.log(retrievedData);
  return <ul>{retrievedData}</ul>;
};
export default UserData;
