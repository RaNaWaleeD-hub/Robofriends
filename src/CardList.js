import React from "react";
import Card from "./Card";
import "./App.css";

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap ">
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
