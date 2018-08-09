import React, { Component } from 'react';

import "./style.css"

const fetchHome = () => {
  const query = `
  {
    allNations{
      name
      flag

      tanks {
          id
          name
          photos
        }
      }
  }
  `
  return fetch(`http://localhost:3001/api?query=${query}`)
    .then(resp => resp.json())
    .then(({ data: { allNations } }) => allNations)
}

class Home extends Component {
  state = { nations: [] }

  componentDidMount() {
    fetchHome().then(nations => {
      console.log(nations)
      this.setState({ nations })
    })
  }

  render() {
    return (
      <div className="home">
        {
          this.state.nations.map(nation => (
            <div className="nation-view">
              <h2>
                <img className="flag" src={nation.flag} />
                { nation.name }
              </h2>
              <ul className="tank-list simple-list">
                {
                  nation.tanks.map(tank => (
                    <li>
                      <h4>{ tank.name }</h4>
                      <img src={tank.photos[0]} onClick={() => this.props.onSelectTank(tank.id)} />
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Home
