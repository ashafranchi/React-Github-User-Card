import React, { Component } from 'react';
import './App.css';
import Users from "./src/components/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    this.getUsers("https://api.github.com/users/ashafranchi/followers")
  }

  getUsers = URL => {
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      this.setState({ people: data.results });
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="Header"></h1>
        <Users users={this.state.people}/>
      </div>
    );
  }
}


export default App;
