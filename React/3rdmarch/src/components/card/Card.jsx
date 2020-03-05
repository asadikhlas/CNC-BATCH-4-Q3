import React from "react";
import "./card.css";

const Card = ({ name = "Ali", age, skills, image }) => {
  return (
    <React.Fragment>
        <div className="card">
          <img src={image} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{name}</b>
              <br />
              <b>{age}</b>
            </h4>
            {skills.map((item, index) => (
              <span key={index}>{item},</span>
            ))}
          </div>
        </div>
      {/* {name === "Asad" && 
      <div className="card">
          <img src={image} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{name}</b>
              <br />
              <b>{age}</b>
              <p>I am conditional render</p>
            </h4>
            {skills.map((item, index) => (
              <span key={index}>{item},</span>
            ))}
          </div>
        </div>
      } */}
      {/* {name === "Asad" ? (
        <div className="card">
          <img src={image} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{name}</b>
              <br />
              <b>{age}</b>
              <p>I am conditional render</p>
            </h4>
            {skills.map((item, index) => (
              <span key={index}>{item},</span>
            ))}
          </div>
        </div>
      ) : (
        null
      )} */}
    </React.Fragment>
  );
};

export default Card;
