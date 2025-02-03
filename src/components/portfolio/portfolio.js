import { useState } from "react";
import "./portfolio.scss";

const Portfolio = () => {
  const [websites, SetWebsites] = useState(true);
  const [games, SetGames] = useState(false);

  return (
    <div className="main-portfolio-bg">
      <div className="main-portfolio">
        <h1>Portfolio</h1>
        <hr />
        <div className="main-portfolio-nav">
          <button
            className={
              websites
                ? "main-portfolio-nav-active"
                : "main-portfolio-nav-noactive"
            }
            onClick={() => {
              SetWebsites(true);
              SetGames(false);
            }}
          >
            Websites
          </button>
          <button
            className={
              games
                ? "main-portfolio-nav-active"
                : "main-portfolio-nav-noactive"
            }
            onClick={() => {
              SetWebsites(false);
              SetGames(true);
            }}
          >
            Games
          </button>
        </div>
        {websites && (
          <div className="main-portfolio-text">
            <div className="main-portfolio-text-box">
              <h2>Personal Travel Blog</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  My personal travel blog, where I post information and stories
                  about my travels and volunteering around the world.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, Node.js, SCSS, MongoDB
                </p>
              </div>
              <div className="main-portfolio-text-box-links">
                <button>Page</button>
                <button>Github</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>OnTime app</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  OnTime is an online booking application that is made available
                  for available dates and free appointments on the
                  website.Thanks to appliacation you can make an appointment
                  with many entrepreneurs, such as hairdressers.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, CSS, C#, MySQL
                </p>
              </div>
              <div className="main-portfolio-text-box-links">
                <button>Github</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>Movies Browser</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  A prototype of an application imitating a website dedicated to
                  films and series. It has a sample database of films and series
                  on which we can perform CRUD operations
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>.NET, jQuery
                </p>
              </div>
              <div className="main-portfolio-text-box-links">
                <button>Github</button>
              </div>
            </div>
          </div>
        )}
        {games && (
          <div className="main-portfolio-text">
            <div className="main-portfolio-text-box">
              <h2>Seconds to Death</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  You play as a night ambulance driver, your task is to get to
                  the scene of a car accident as quickly as possible. While
                  driving, you have to watch out for obstacles in the form of
                  speeding vehicles and limited visibility conditions on the
                  road.2D game made for GameJam 24h in Unity.
                </p>
              </div>

              <div className="main-portfolio-text-box-links">
                <button>Link</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>OFFLINE</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  On the day of the premiere of your favorite game, the internet
                  suddenly disappears, people in the city go crazy, they start
                  shooting and fighting, they behave like animals, restore the
                  internet in the city and play your favorite game!
                </p>
              </div>

              <div className="main-portfolio-text-box-links">
                <button>Link</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>Dissergeon</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  You play as an adventurer whose task is to explore an
                  abandoned dungeon. Fight monsters, look for hidden treasures,
                  level up your character. How low can you go in the dungeon?
                </p>
              </div>
              <div className="main-portfolio-text-box-links">
                <button>Link</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
