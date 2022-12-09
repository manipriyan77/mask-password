import React, { useState } from "react";

const Users = ({ children, user }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <p>
        <p>UserName: {user.name.first}</p>
        <p>Password: {isShow ? "*******" : user.login.password}</p>
      </p>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {isShow ? "showPassowrd" : "Hide Passowrd"}
      </button>
    </div>
  );
};

export default Users;
