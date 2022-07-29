import { React, Component } from 'react'

import WC3 from '../resources/images/wc3-image.png'
import WOW from '../resources/images/wow-image.png'
import RDR2 from '../resources/images/rdr2.jpg'
import ER from '../resources/images/ER.jpg'
import HOMAM3 from '../resources/images/HOMAM3.jpg'

import GameListItems from '../components/GameList/GameListItems.js'

function GameItem({ url, itemClass, image, imageAlt, title, details }) {
  const detailsItems = details.map((values) => (
    <a
      key={values.title}
      href={values.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li>
        <span>{values.title}</span>
      </li>
    </a>
  ))

  return (
    <div className={`list-content-item ${itemClass}`}>
      <a href={url} target="_blank" rel="noopener noreferrer" title={title}>
        <div className="list-item-image-container">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="list-item-details">
          <h3>{title}</h3>
          <ul>{detailsItems}</ul>
        </div>
      </a>
    </div>
  )
}

function GameItemSmall({ id, image, title, details, progress }) {
  const detailsItems = details.map((values) => (
    <a
      key={values.title}
      href={values.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li>
        <span>{values.title}</span>
      </li>
    </a>
  ))

  return (
    <div className={`list-content-item-small`}>
      <a
        key={id}
        href={title}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        <div className="list-item-image-container">
          <img src={image} alt={'asd'} />
        </div>
        <div className="progress-bar">
          <span>{progress}%</span>
        </div>
        <div className="list-item-details">
          <h3>{title}</h3>
          <ul>{detailsItems}</ul>
        </div>
      </a>
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
          <div className="top-list">
            <h2>Top 5</h2>
            <p>My top five games of all time.</p>
            <div className="top-list-item-container">
              <div className="top-list-item">
                <GameItem
                  url={
                    'https://en.wikipedia.org/wiki/Warcraft_III:_The_Frozen_Throne'
                  }
                  itemClass={'WC3'}
                  image={WC3}
                  imageAlt={'asd'}
                  title={'Warcraft III'}
                  details={[
                    {
                      title: 'RTS',
                      url: 'https://en.wikipedia.org/wiki/Real-time_strategy',
                    },
                  ]}
                />
              </div>
              <div className="top-list-item">
                <GameItem
                  url={'https://worldofwarcraft.com/en-us/'}
                  itemClass={'WOW'}
                  image={WOW}
                  imageAlt={'asd'}
                  title={'World of Warcraft'}
                  details={[
                    {
                      title: 'MMORPG',
                      url:
                        'https://en.wikipedia.org/wiki/Massively_multiplayer_online_role-playing_game',
                    },
                  ]}
                />
              </div>
              <div className="top-list-item">
                <GameItem
                  url={'https://www.rockstargames.com/reddeadredemption2/'}
                  itemClass={'RDR2'}
                  image={RDR2}
                  imageAlt={'asd'}
                  title={'Red Dead Redemption 2'}
                  details={[
                    {
                      title: 'Western',
                      url: 'https://en.wikipedia.org/wiki/Western_(genre)',
                    },
                    {
                      title: 'Action',
                      url: 'https://en.wikipedia.org/wiki/Action_game',
                    },
                    {
                      title: 'Adventure',
                      url: 'https://en.wikipedia.org/wiki/Adventure_game',
                    },
                  ]}
                />
              </div>
              <div className="top-list-item">
                <GameItem
                  url={'https://en.bandainamcoent.eu/elden-ring/elden-ring'}
                  itemClass={'ER'}
                  image={ER}
                  imageAlt={'asd'}
                  title={'Elden Ring'}
                  details={[
                    {
                      title: 'Action',
                      url: 'https://en.wikipedia.org/wiki/Action_game',
                    },
                    {
                      title: 'RPG',
                      url:
                        'https://en.wikipedia.org/wiki/Role-playing_video_game',
                    },
                  ]}
                />
              </div>
              <div className="top-list-item">
                <GameItem
                  url={
                    'https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III'
                  }
                  itemClass={'HOMAM3'}
                  image={HOMAM3}
                  imageAlt={'asd'}
                  title={'Heroes of Might and Magic III'}
                  details={[
                    {
                      title: 'Turn-based Strategy',
                      url: 'https://en.wikipedia.org/wiki/Turn-based_strategy',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="current-list">
            <h2>Playing</h2>
            <p>The games I am currently playing.</p>
            <div className="current-list-item-container">
              {GameListItems.map((values) => {
                return (
                  <div className="current-list-item">
                    <GameItemSmall
                      id={values.id}
                      image={values.image}
                      title={values.title}
                      details={values.details}
                      progress={'65'}
                    />
                  </div>
                )
              })}
              {/* <GameItem
                  itemClass={'WC3'}
                  image={WC3}
                  title={'Warcraft III'}
                  details={['Fantasy', 'RTS']}
                /> */}
            </div>
          </div>
          <div className="completed-list"></div>
        </section>
      </main>
    )
  }
}

export default GameList
