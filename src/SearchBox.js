import React from "react";

const Searchfield = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3  bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchfield;
