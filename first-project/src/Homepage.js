import React from "react";

const Homepage = (props) => {
  return (
    <>
      <div className="container">
        <div>
          <h1>React JS Basic</h1>
          <h2>Programing Languange </h2>
          <p> {props.text}</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsxunBz71GqbyXhaObB7UpgF2zGK-nek0hQ&s"
            alt="avatar"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
