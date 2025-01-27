import "./header.scss";

const Header = ({
  setAboutMe,
  setEducation,
  setPortfolio,
  setTechnology,
  setAchievements,
  aboutmeref,
  educationref,
  portfolioref,
  technologyref,
  achievementsref,
}) => {
  return (
    <div className="main-header">
      <div className="main-header-list">
        <ul>
          <li
            ref={aboutmeref}
            onClick={() => {
              setAboutMe(true);
              setEducation(false);
              setPortfolio(false);
              setTechnology(false);
              setAchievements(false);
            }}
          >
            About me
          </li>
          <li
            ref={educationref}
            onClick={() => {
              setAboutMe(false);
              setEducation(true);
              setPortfolio(false);
              setTechnology(false);
              setAchievements(false);
            }}
          >
            Education
          </li>
          <li
            ref={portfolioref}
            onClick={() => {
              setAboutMe(false);
              setEducation(false);
              setPortfolio(true);
              setTechnology(false);
              setAchievements(false);
            }}
          >
            Portfolio
          </li>
          <li
            ref={technologyref}
            onClick={() => {
              setAboutMe(false);
              setEducation(false);
              setPortfolio(false);
              setTechnology(true);
              setAchievements(false);
            }}
          >
            Technology
          </li>
          <li
            ref={achievementsref}
            onClick={() => {
              setAboutMe(false);
              setEducation(false);
              setPortfolio(false);
              setTechnology(false);
              setAchievements(true);
            }}
          >
            Achievements
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
