import React, { Component } from 'react';

import Tank from "./components/Tank"
import Home from "./components/Home"
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

  selectTank = tankId => {
    fetchTank(tankId)
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
              ? (<Tank tank={this.state.tank} onBack={() => this.setState({ tank: null })} />)
              : (<Home onSelectTank={this.selectTank}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
