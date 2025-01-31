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
              <h2>Lorem ipsum</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  Donec ultrices sapien nisi, dignissim laoreet lacus egestas
                  id. Cras porta purus quis pellentesque gravida. Cras ut
                  bibendum nisi, a rutrum odio. Etiam eu tincidunt elit, eu
                  sagittis augue.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, SCSS
                </p>
              </div>
              <div className="main-portfolio-text-box-links">
                <button>Page</button>
                <button>Github</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>Donec eget risus</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  Nulla congue posuere purus, sit amet viverra urna tincidunt
                  at. Sed mattis iaculis nulla eu imperdiet. Cras convallis
                  dapibus neque at vehicula. Aenean non turpis vel felis varius
                  sodales ac sit amet risus.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, SCSS
                </p>
              </div>
              <div className="main-portfolio-text-box-links">
                <button>Page</button>
                <button>Github</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>Phasellus porttitor</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  Donec interdum sollicitudin sem sed placerat. Nulla eros
                  ligula, volutpat in semper suscipit, scelerisque nec nibh.
                  Cras non aliquet mi. Integer vestibulum placerat hendrerit.
                  Cras sagittis aliquam ultrices. Donec lorem orci.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, SCSS
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
              <h2>Lorem game</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  Donec ultrices sapien nisi, dignissim laoreet lacus egestas
                  id. Cras porta purus quis pellentesque gravida. Cras ut
                  bibendum nisi, a rutrum odio. Etiam eu tincidunt elit, eu
                  sagittis augue.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, SCSS
                </p>
              </div>

              <div className="main-portfolio-text-box-links">
                <button>Link</button>
                <button>Github</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>Donec game risus</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  Nulla congue posuere purus, sit amet viverra urna tincidunt
                  at. Sed mattis iaculis nulla eu imperdiet. Cras convallis
                  dapibus neque at vehicula. Aenean non turpis vel felis varius
                  sodales ac sit amet risus.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, SCSS
                </p>
              </div>

              <div className="main-portfolio-text-box-links">
                <button>Link</button>
                <button>Github</button>
              </div>
            </div>
            <div className="main-portfolio-text-box">
              <h2>Game porttitor</h2>
              <div className="main-portfolio-text-box-desc">
                <p>
                  Donec interdum sollicitudin sem sed placerat. Nulla eros
                  ligula, volutpat in semper suscipit, scelerisque nec nibh.
                  Cras non aliquet mi. Integer vestibulum placerat hendrerit.
                  Cras sagittis aliquam ultrices. Donec lorem orci.
                </p>
              </div>
              <div className="main-portfolio-text-box-tech">
                <p>
                  <b>Technology: </b>React.js, SCSS
                </p>
              </div>
              <div className="main-portfolio-text-box-links">
                <button>Link</button>
                <button>Github</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
