import "./App.css";

import CardList from "./CardList";
import SearchBox from "./SearchBox";

import "tachyons";

import React, { useEffect, useState } from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchfield: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState({ robots: users });
//       });
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value });
//   };

//   render() {
//     const { robots, searchfield } = this.state;
//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//     });
//     return !robots.length ? (
//       <h1>Loading</h1>
//     ) : (
//       <div className="tc ">
//         <h1 className="pv3">RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChange} />

//         <CardList robots={filteredRobots} />
//       </div>
//     );
//   }
// }

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  });
  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc ">
      <h1 className="pv3">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />

      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
