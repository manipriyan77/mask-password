import React, { Component } from "react";
import CardComponent from "./Card";
const CardList = (props) => {
  const { users } = props;
  return (
    <div className="card-list">
      {users.map((user) => {
        return <CardComponent user={user} />;
      })}
    </div>
  );
};

export default CardList;
