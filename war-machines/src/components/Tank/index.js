import React from "react"
import "./style.css"

const Tank = ({ tank }) => (
  <div className="tank-view">
    <h1>{ tank.name }</h1>
    <div className="content">
      <div>
        <div className="header">
          <div>
            <h3>Period:</h3>
            {tank.period.name} ({tank.period.start}-{tank.period.end})
          </div>
          <div className="flag">
            <h3> Nation </h3>
            <img src={tank.nation.flag} />
          </div>
        </div>
        <p className="desc">{ tank.description}</p>

        {
          tank.variants.length
            ? (
              <div>
                <h2>Variants</h2>
                <ul className="simple-list variant-list">
                  {
                    tank.variants.map(variant => (
                      <li>
                        <h4>{variant.name}</h4>
                        <img src={variant.photos[0]} />
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
            : null
        }
      </div>
      <div className="photos">
        { tank.photos.map(photo => ( <img src={photo} /> )) }
      </div>
    </div>
  </div>
)

export default Tank
