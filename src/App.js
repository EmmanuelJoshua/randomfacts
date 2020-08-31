import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      randomFacts: {}
    };
  }

  componentDidMount() {
    fetch("https://webknox-trivia-knowledge-facts-v1.p.rapidapi.com/trivia/random", { "method": "GET", "headers": { "x-rapidapi-host": "webknox-trivia-knowledge-facts-v1.p.rapidapi.com", "x-rapidapi-key": "6a17ef06f0mshcd455dbb738e1a5p1c6bf0jsn5206f1063964" } })
    .then(response => response.json())
    .then(data => this.setState({
      randomFacts: data
    }))
    .catch(err => { console.log(err); });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.randomFacts.trivia}
        </header>
      </div>
    );
  }

}

export default App;
