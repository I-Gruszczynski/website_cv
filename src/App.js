import "./App.css";
import Header from "./components/header/header.js";
import Aboutme from "./components/aboutme/aboutme.js";
import { useEffect, useRef, useState } from "react";
import Information from "./components/information/information.js";
import Education from "./components/education/education.js";

function App() {
  const [aboutme, setAboutMe] = useState(true);
  const [education, setEducation] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [achievements, setAchievements] = useState(false);

  const aboutmeref = useRef(null);
  const educationref = useRef(null);
  const portfolioref = useRef(null);
  const technologyref = useRef(null);
  const achievementsref = useRef(null);

  useEffect(() => {
    if (aboutme) {
      aboutmeref.current.style.backgroundColor = "#fff";
      aboutmeref.current.style.translate = "0px -30px";
      aboutmeref.current.style.color = "#5026E8";
    } else {
      aboutmeref.current.style.backgroundColor = "#ccc";
      aboutmeref.current.style.translate = "0px";
      aboutmeref.current.style.color = "#000";
    }

    if (education) {
      educationref.current.style.backgroundColor = "#fff";
      educationref.current.style.translate = "0px -30px";
      educationref.current.style.color = "#5026E8";
    } else {
      educationref.current.style.backgroundColor = "#ccc";
      educationref.current.style.translate = "0px";
      educationref.current.style.color = "#000";
    }

    if (portfolio) {
      portfolioref.current.style.backgroundColor = "#fff";
      portfolioref.current.style.translate = "0px -30px";
      portfolioref.current.style.color = "#5026E8";
    } else {
      portfolioref.current.style.backgroundColor = "#ccc";
      portfolioref.current.style.translate = "0px";
      portfolioref.current.style.color = "#000";
    }

    if (technology) {
      technologyref.current.style.backgroundColor = "#fff";
      technologyref.current.style.translate = "0px -30px";
      technologyref.current.style.color = "#5026E8";
    } else {
      technologyref.current.style.backgroundColor = "#ccc";
      technologyref.current.style.translate = "0px";
      technologyref.current.style.color = "#000";
    }

    if (achievements) {
      achievementsref.current.style.backgroundColor = "#fff";
      achievementsref.current.style.translate = "0px -30px";
      achievementsref.current.style.color = "#5026E8";
    } else {
      achievementsref.current.style.backgroundColor = "#ccc";
      achievementsref.current.style.translate = "0px";
      achievementsref.current.style.color = "#000";
    }
  });

  return (
    <div className="App">
      <div className="main-mybio">
        <img
          src="./279726132_4860771730687869_5937944396472994506_n.jpg"
          width={150}
          height={150}
          alt="Igor"
        />
        <Information />
      </div>

      <div className="main-content">
        <Header
          setAboutMe={setAboutMe}
          setEducation={setEducation}
          setPortfolio={setPortfolio}
          setTechnology={setTechnology}
          setAchievements={setAchievements}
          aboutmeref={aboutmeref}
          educationref={educationref}
          portfolioref={portfolioref}
          technologyref={technologyref}
          achievementsref={achievementsref}
        />
        <div className="main-content-text">
          {aboutme && <Aboutme />}
          {education && (
            <p>
              <Education />
            </p>
          )}
          {portfolio && <p>3</p>}
          {technology && <p>4</p>}
          {achievements && <p>5</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
