import React from "react";
import UserItem from "../../components/UserItem/UserItem";


function PeoplesPage(props) {
  return (
    <div className="paper mt2 p2">
      <UserItem/>
      <UserItem/>
      <UserItem/>
      <UserItem/>
      <UserItem/>
      <UserItem/>
    </div>
  );
}

export default PeoplesPage;
