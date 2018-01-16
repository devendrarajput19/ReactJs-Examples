import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is First React App</h1>

        <h2> React Team Members: </h2>
        <Person />
        <Person name="Nitesh"/>
        <Person name="Devendra"/>
        <Person name="Anu"/>
        <Person name="Ravi"/>
      </div>

    );
  }
}

export default App;
