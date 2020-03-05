import React from "react";
import "./Button.css";

const Button = ({ isLoggedIn }) => {
  // const {isLoggedIn} = props
  return (
    <div>
      {isLoggedIn ? (
        <button className="button">Login</button>
      ) : (
        <button className="button">Logout</button>
      )}
    </div>
  );
};

export default Button;
