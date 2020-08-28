import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      characters : {}
    };
  }

  componentDidMount(){
   fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
        this.setState({
          characters : data
        })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.characters.name}
        </header>
      </div>
    );
  }

}

export default App;
