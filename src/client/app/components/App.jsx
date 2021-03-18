import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  clickHandler() {
    fetch('/getData')
      .then(response => console.log({response}));

    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then(response => response.json())
    //   .then(data => console.log({data}));
  }

  render() {
    return (
      <div>
        <p>Hello, Reacts!</p>

        <button onClick={this.clickHandler}>API call</button>

        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
