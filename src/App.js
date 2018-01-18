import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  state = {
    persons: [
        {name: 'Devendra', age: 25 },
        {name: 'Nitesh', age: 29 },
        {name: 'Anu', age: 25 },
        {name: 'Ravi', age: 25 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is First React App</h1>

        <h2> React Team Members: </h2>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />

      </div>

    );
  }
}

export default App;
