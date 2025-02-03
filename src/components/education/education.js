import "./education.scss";

const Education = () => {
  return (
    <div className="main-education-bg">
      <div className="main-education">
        <h1>Education</h1>
        <hr />
        <div className="main-education-text">
          <div className="main-education-text-school">
            <div className="main-education-text-school-header">
              <img src="./logo-pol.jpg" alt="UNIVERSITY OG KAZIMIERZ WIELKI" />
              <h2>University of Kazimierz Wielki</h2>
            </div>
            <div className="main-education-text-school-context">
              <p>
                <b>Duration: </b>10.2020 - 03.2024
              </p>
              <p>
                <b>Conutry:</b> Poland
              </p>
              <p>
                <b>Degree:</b> Banchelor of Enginnering
              </p>
            </div>
            <p>
              Kazimierz Wielki University is a public university founded in 1968
              in Bydgoszcz. University is a dynamically developing school of
              higher education, today the largest in the city and the second
              largest in the Kujawsko-Pomorskie Province, both as for number of
              professors, number of majors and educational forms offered and the
              number of students and graduates.
            </p>
          </div>
          <div className="main-education-text-school">
            <div className="main-education-text-school-header">
              <img
                src="./Zhongnan_UEL_Logo.gif"
                alt="ZHONGNAN UNIVERSITY OF ECONOMICS AND LAW"
              />
              <h2>Zhongnan University of Economics and Law</h2>
            </div>
            <div className="main-education-text-school-context">
              <p>
                <b>Duration:</b> 09.2024 - now
              </p>
              <p>
                <b>Conutry:</b> China
              </p>
              <p>
                <b>Degree:</b> Master
              </p>
            </div>
            <p>
              Zhongnan University of Economics and Law (ZUEL) is located in
              Wuhan, a metropolis of Central China. It is an institution of
              higher education under the Ministry of Education of the People’s
              Republic of China. ZUEL has established itself as a top university
              directly under the Ministry of Education and has been appointed as
              a participant in the “world-class university and first-class
              disciplines”, the national development project committed to
              achieving first-rate education and scholarships that meet
              international standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
