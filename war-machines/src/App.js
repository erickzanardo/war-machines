import React, { Component } from 'react';

import Tank from "./components/Tank"
import './App.css';

const fetchTank = id => {
  const query = `
  {
    findTankById(id: "${id}") {
      name
      description

      variants {
        name
        photos
      }
      nation {
        name
        flag
      }

      period {
        name
        start
        end
      }

      photos
    }
  }
  `
  return fetch(`http://localhost:3001/api?query=${query}`)
    .then(resp => resp.json())
    .then(({ data: { findTankById } }) => findTankById)
}

class App extends Component {
  state = {
    tank: null,
  }

  componentDidMount() {
    fetchTank("m4")
      .then(tank => {
        this.setState({ tank })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> War Machines </h1>
        </header>
        <div className="App-intro">
          {
            this.state.tank
              ? (<Tank tank={this.state.tank} />)
              : (<span>No tank selected</span>)
          }
        </div>
      </div>
    );
  }
}

export default App;
