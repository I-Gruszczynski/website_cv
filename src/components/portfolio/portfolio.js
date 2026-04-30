import { useState } from "react";
import "./portfolio.scss";

const Portfolio = () => {
  const [websites, SetWebsites] = useState(true);
  const [games, SetGames] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Dane dla Websites
  const websitesData = [
    {
      title: "IGTRAVEL - PERSONAL TRAVEL BLOG",
      desc: "My personal travel blog, where I post information and stories about my travels and volunteering around the world.",
      tech: "React.js, Node.js, SCSS, MongoDB",
      pageLink: "https://microtest.toadres.pl/igtravel/",
      githubLink: "https://github.com/I-Gruszczynski/ZHP_Slupsk_Website",
    },
    {
      title: "ONTIME - APPLICATION FOR APPOINMENTS",
      desc: "OnTime is an online booking application that is made available for available dates and free appointments on the website.Thanks to appliacation you can make an appointment with many entrepreneurs, such as hairdressers.",
      tech: "React.js, CSS, C#, MySQL",
      pageLink: "https://microtest.toadres.pl/ontime/",
      githubLink: "https://github.com/ProjectBarber",
    },
    {
      title: "IGEXPENSE - EXPENSE TRACKER APPLICATION",
      desc: "Created a expense tracer where each pesron can monitor their expenses by adding earing and expensedin into thte list grouping them into differe category. Application was creating using Vue.js",
      tech: "Vue.js, CSS",
      pageLink: "https://microtest.toadres.pl/igexpense/",
      githubLink: "https://github.com/I-Gruszczynski/vue-expenseTracker",
    },
    {
      title: "IGWEATHER - WEATHER APPLICATION",
      desc: "Created a application for weather forecast, when the user can check the basing information of current and future weather for any city. The application in build in React.js framework and use AccuWeather as a API",
      tech: "React.js, SCSS",
      pageLink: "https://microtest.toadres.pl/igweather/",
      githubLink: "https://github.com/I-Gruszczynski/WeatherIG_App",
    },
    {
      title: "WOLONTURYSCI.PL - VOLUNTEERING BLOG",
      desc: "Wordpress blog that descrbie my participation in a 2-month volunteer project in Spain. The goal of the project was to break cultural and language barriers, help local residents, and expand knowledge about ecology. The volunteer's tasks included, among others, helping at Caritas and the Red Cross.",
      tech: "Wordpress",
      pageLink: "https://wolonturysci.pl",
      githubLink: null,
    },
  ];

  // Dane dla Games
  const gamesData = [
    {
      title: "Seconds to Death",
      desc: "You play as a night ambulance driver, your task is to get to the scene of a car accident as quickly as possible. While driving, you have to watch out for obstacles in the form of speeding vehicles and limited visibility conditions on the road.2D game made for GameJam 24h in Unity.",
      link: "https://filipmachalowski.itch.io/seconds-to-death",
    },
    {
      title: "OFFLINE",
      desc: "On the day of the premiere of your favorite game, the internet suddenly disappears, people in the city go crazy, they start shooting and fighting, they behave like animals, restore the internet in the city and play your favorite game!",
      link: "https://filipmachalowski.itch.io/offline",
    },
    {
      title: "Dissergeon",
      desc: "You play as an adventurer whose task is to explore an abandoned dungeon. Fight monsters, look for hidden treasures, level up your character. How low can you go in the dungeon?",
      link: null,
    },
  ];

  // Obliczanie liczby stron
  const getCurrentData = () => {
    const data = websites ? websitesData : gamesData;
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return { paginatedData, totalPages };
  };

  const { paginatedData, totalPages } = getCurrentData();

  // Resetowanie strony przy zmianie kategorii
  const handleCategoryChange = (isWebsites) => {
    SetWebsites(isWebsites);
    SetGames(!isWebsites);
    setCurrentPage(1);
  };

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
            onClick={() => handleCategoryChange(true)}
          >
            Websites
          </button>
          <button
            className={
              games
                ? "main-portfolio-nav-active"
                : "main-portfolio-nav-noactive"
            }
            onClick={() => handleCategoryChange(false)}
          >
            Games
          </button>
        </div>

        {(websites || games) && (
          <div className="main-portfolio-text">
            {paginatedData.map((item, index) => (
              <div className="main-portfolio-text-box" key={index}>
                <h3>{item.title}</h3>
                <div className="main-portfolio-text-box-desc">
                  <p>{item.desc}</p>
                </div>
                {websites && (
                  <div className="main-portfolio-text-box-tech">
                    <p>
                      <b>Technology: </b>
                      {item.tech}
                    </p>
                  </div>
                )}
                <div className="main-portfolio-text-box-links">
                  {websites ? (
                    <>
                      <button>
                        <a
                          href={item.pageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Page
                        </a>
                      </button>
                      {item.githubLink && (
                        <button>
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </a>
                        </button>
                      )}
                    </>
                  ) : (
                    item.link && (
                      <button>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </button>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Przyciski nawigacji stron */}
        {totalPages > 1 && (
          <div>
            <div style={{ clear: "both" }}></div>
            <div className="main-portfolio-pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              <span className="pagination-info">
                Page {currentPage} z {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
