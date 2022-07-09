import { React, Component } from 'react'

import WC3 from '../resources/images/wc3-image.png'
import WOW from '../resources/images/wow-image.png'
import RDR2 from '../resources/images/rdr2.jpg'
import ER from '../resources/images/ER.jpg'
import HOMAM3 from '../resources/images/HOMAM3.jpg'

function GameItem({ itemClass, image, title, details }) {
  const detailsItems = details.map((value) => (
    <li>
      <span>{value}</span>
    </li>
  ))
  return (
    <div className={`list-content-item ${itemClass}`}>
      <div className="list-item-image-container">
        <img src={image} alt="" />
      </div>
      <div className="list-item-details">
        <h3>{title}</h3>
        <ul>{detailsItems}</ul>
      </div>
    </div>
  )
}

class GameList extends Component {
  render() {
    return (
      <main className="game-list">
        <section className="game-list-intro">
          <h1>Joakim's Game Lists</h1>
          <p>
            My personal lists of games that I value strongly, have completed, or
            intend to try out!
          </p>
        </section>
        <section className="game-list-content">
          <div className="playing-list">
            <h2>Top 5</h2>
            <p>My top five games of all time.</p>
            <div className="playing-list-item-container">
              <div className="playing-list-item">
                <GameItem
                  itemClass={'WC3'}
                  image={WC3}
                  title={'Warcraft III'}
                  details={['RTS']}
                />
              </div>
              <div className="playing-list-item">
                <GameItem
                  itemClass={'WOW'}
                  image={WOW}
                  title={'World of Warcraft'}
                  details={['MMORPG']}
                />
              </div>
              <div className="playing-list-item">
                <GameItem
                  itemClass={'RDR2'}
                  image={RDR2}
                  title={'Red Dead Redemption 2'}
                  details={['Western', 'Action', 'Adventure']}
                />
              </div>
              <div className="playing-list-item">
                <GameItem
                  itemClass={'ER'}
                  image={ER}
                  title={'Elden Ring'}
                  details={['Action', 'RPG']}
                />
              </div>
              <div className="playing-list-item">
                <GameItem
                  itemClass={'HOMAM3'}
                  image={HOMAM3}
                  title={'Heroes of Might and Magic III'}
                  details={['Turn-based', 'Strategy']}
                />
              </div>
            </div>
          </div>
          <div className="top-list">
            <h2>Playing</h2>
            <p>The games I am currently playing.</p>
            <div className="current-list-item-container">
              <div className="current-list-item">
                {/* <GameItem
                  itemClass={'WC3'}
                  image={WC3}
                  title={'Warcraft III'}
                  details={['Fantasy', 'RTS']}
                /> */}
              </div>
            </div>
          </div>
          <div className="completed-list"></div>
        </section>
      </main>
    )
  }
}

export default GameList
