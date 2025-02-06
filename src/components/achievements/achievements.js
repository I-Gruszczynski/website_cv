import { useState } from "react";
import "./achievements.scss";

const Achievements = () => {
  const [competitions, SetCompetitions] = useState(true);
  const [certificates, SetCertificates] = useState(false);
  const [training, SetTraining] = useState(false);
  return (
    <div className="main-achievements-bg">
      <div className="main-achievements">
        <h1>Achievements</h1>
        <hr />
        <div className="main-achievements-nav">
          <button
            className={
              competitions
                ? "main-achievements-nav-active"
                : "main-achievements-nav-noactive"
            }
            onClick={() => {
              SetCompetitions(true);
              SetCertificates(false);
              SetTraining(false);
            }}
          >
            Competitions
          </button>
          <button
            className={
              certificates
                ? "main-achievements-nav-active"
                : "main-achievements-nav-noactive"
            }
            onClick={() => {
              SetCompetitions(false);
              SetCertificates(true);
              SetTraining(false);
            }}
          >
            Certificates
          </button>
          <button
            className={
              training
                ? "main-achievements-nav-active"
                : "main-achievements-nav-noactive"
            }
            onClick={() => {
              SetCompetitions(false);
              SetCertificates(false);
              SetTraining(true);
            }}
          >
            Trainings and volunteers
          </button>
        </div>
        <div className="main-achievements-content">
          {competitions && (
            <div className="main-achievements-content-compet">
              <div className="main-achievements-content-compet-box">
                <img src="./cyberiadaLogo.jpg" alt="Cyberiada" />
                <div className="main-achievements-content-compet-box-text">
                  <h3>
                    National Computer Game Programming Competition "Cyberiada"
                  </h3>
                  <p>
                    Participation in a team computer game programming
                    competition, where I was a game developer. Together with the
                    team, we took 15th place in Poland and 3rd place in the
                    Kuyavian-Pomeranian Voivodeship.
                  </p>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="main-achievements-content-compet-box">
                <img src="./hackathonLogo.png" alt="Hackathon" />
                <div className="main-achievements-content-compet-box-text">
                  <h3>Hackathon 2023</h3>
                  <p>
                    Participation in a team competition titled "Hackathon",
                    where our goal was to program an application in 24 hours. I
                    was a leader and front-end developer in the team.
                  </p>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="main-achievements-content-compet-box">
                <img src="./nokiaLogo.png" alt="Nokiathon" />
                <div className="main-achievements-content-compet-box-text">
                  <h3>Nokiathon 2023</h3>
                  <p>
                    Participation in the "Nokiathon" competition organized by
                    Nokia. The competition involved writing various computer
                    programs that solved a given problem in the shortest
                    possible time.
                  </p>
                </div>
              </div>
            </div>
          )}
          {certificates && (
            <div className="main-achievements-content-cert">
              <div className="main-achievements-content-cert-box">
                <img src="./toeicLogo.jpg" alt="Curba de Cultura" />
                <div className="main-achievements-content-cert-box-text">
                  <h3>
                    Test of English for International Communication (TOEiC)
                  </h3>
                  <p>
                    Participation in the TOEIC exam, which allows you to
                    effectively assess your English language skills and
                    determine the degree of effective communication with
                    colleagues and clients. The exam was organized by ETS Global
                    B.V.
                  </p>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="main-achievements-content-cert-box">
                <img src="./logo-pol.jpg" alt="Curba de Cultura" />
                <div className="main-achievements-content-cert-box-text">
                  <h3>Practical Aspects of VR Technology</h3>
                  <p>
                    Participation in a training aimed at learning how to develop
                    games in VR technology based on the Unity engine. The
                    training was organized by UKW universities as part of the
                    project entitled "Stawiamy na rozwój UKW".
                  </p>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="main-achievements-content-cert-box">
                <img src="./nvidiaLogo.png" alt="Curba de Cultura" />
                <div className="main-achievements-content-cert-box-text">
                  <h3>
                    NVIDIA - Fundamentionals of Deep Learning for computer
                    vision
                  </h3>
                  <p>
                    Participation in the NVIDIA course on training artificial
                    intelligence to recognize image data and the details
                    contained in them. The course ended with obtaining a
                    certificate.
                  </p>
                </div>
              </div>
            </div>
          )}
          {training && (
            <div className="main-achievements-content-train">
              <div className="main-achievements-content-train-box">
                <img src="./verdesurLogo.png" alt="Verde Sur" />
                <div className="main-achievements-content-train-box-text">
                  <h3>
                    Volunteering in Spain with a program “Step to the future
                    with Alcala la real”
                  </h3>
                  <p>
                    Participation in 2-month volunteering in Spain. The aim of
                    the project was to break down cultural and language
                    barriers, help the city's inhabitants and expand knowledge
                    about ecology. The volunteer's tasks included helping
                    Caritas and the Red Cross. Moreover, activities with local
                    youth and meetings with city residents were organized.
                  </p>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="main-achievements-content-train-box">
                <img src="./cubraLogo.jpg" alt="Curba de Cultura" />
                <div className="main-achievements-content-train-box-text">
                  <h3>
                    Training course in Romania with a program “STRONGER
                    TOGETHER”
                  </h3>
                  <p>
                    The aim of this project was to help the participants to
                    understand the mechanisms behind the group process, how to
                    solve problems in groups , communicate with a group and
                    inside the group, reacting in conflict situations, keeping
                    the team motivated short and long term, collaborating
                    towards common goals, making the group an inclusive
                    environment. All of this using non-formal method.
                  </p>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="main-achievements-content-train-box">
                <img src="./campLogo.png" alt="Camp Leaders" />
                <div className="main-achievements-content-train-box-text">
                  <h3>
                    Work & Travel programme - support staff in camp wah-nee in
                    america
                  </h3>
                  <p>
                    Working in a two-month camp for children as a Support Staff.
                    My duties included ensuring the proper functioning of the
                    camp and taking care of its safety and order. Through
                    working abroad, language skills were significantly improved
                    along with the establishment of many international contacts.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Achievements;
