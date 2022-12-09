import { useEffect, useState } from "react";
import Users from "./Components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearchFieldValue] = useState("");
  const url = "https://randomuser.me/api/?results=5";

  const fetchdata = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(users.filter((user) => user.name.first.toLowerCase().includes("m")));

  return (
    <div>
      <input
        type="search"
        onChange={(e) => {
          setSearchFieldValue(e.target.value);
        }}
      />
      {users
        .filter((user) => user.name.first.toLowerCase().includes(search))
        .map((user, i) => {
          return (
            <>
              <Users key={user.id.value} user={user}></Users>
            </>
          );
        })}
    </div>
  );
}

export default App;
