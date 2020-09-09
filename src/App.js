import React, { Component } from 'react';
import { Row, Container, Navbar, Col, Button } from 'react-bootstrap'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      randomFacts: {}
    };
    this.getFact = this.getFact.bind(this);
  }

  componentDidMount() {
   this.getFact();
  }

  getFact(){
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
          <Navbar expand='lg' variant='dark' className='NavBar'>
              <Navbar.Brand href='#home' className='NavBrand'>Random Facts</Navbar.Brand>
          </Navbar>
          <Container fluid>
            <Row>
                <Col className='RandomCard mt-4 ml-md-5'>
                <div className="Header  text-white text-center pt-3 pb-3">
                    <h1>Random Facts</h1>
                    <hr/>
                    <p className='pl-4 pr-4 pt-2'>
                      {/* {this.state.randomFacts.trivia} */}
                      95% of people text things they could never say in person.
                      </p>
                      <Button variant='outline-light' className='mb-3 mt-1' onClick={this.getFact}>
                          Get new fact
                      </Button>
                </div>
                </Col>
                <Col sm={4} md={6}></Col>
            </Row>
          </Container>
         
        </header>
      </div>
    );
  }

}

export default App;
