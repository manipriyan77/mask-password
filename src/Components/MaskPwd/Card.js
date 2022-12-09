import React, { Component } from "react";

const Card = (props) => {
  const { name, id } = props.user;
  return (
    <div key={id}>
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
