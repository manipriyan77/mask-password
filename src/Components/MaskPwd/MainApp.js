import React from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { useState, useEffect } from "react";

const FunctionApp = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respone) => respone.json())
      .then((users) => setUsers(users));
  }, []);
  console.log(users);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchFieldValue(searchFieldString);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchFieldValue);
  });

  return (
    <div>
      <SearchBox
        onSearchChangehandler={onSearchChange}
        placeholder="search users"
        className="search-box"
      />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default FunctionApp;
