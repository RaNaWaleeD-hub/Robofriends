import React from "react";

const Card = (props) => {
  return (
    <div className=" bg-light-yellow  br3 ma3 pa2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}`} alt="pic" />
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
