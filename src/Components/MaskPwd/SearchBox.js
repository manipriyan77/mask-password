import React, { Component } from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        type="search"
        placeholder={props.placeholder}
        onChange={props.onSearchChangehandler}
        className={`search-box`}
      />
    </div>
  );
};

export default SearchBox;
