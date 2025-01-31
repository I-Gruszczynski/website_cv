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
              Fusce justo velit, fringilla blandit enim a, interdum pulvinar
              lorem. Nam dictum, libero luctus sollicitudin vestibulum, ex quam
              pellentesque nulla, id finibus est lacus id mauris. Nam ac tempor
              diam. Donec ultrices sapien nisi, dignissim laoreet lacus egestas
              id. Cras porta purus quis pellentesque gravida. Cras ut bibendum
              nisi, a rutrum odio. Etiam eu tincidunt elit, eu sagittis augue.
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
              Vestibulum mollis, justo ac porttitor ultricies, nibh purus
              tristique purus, pulvinar faucibus orci ipsum non velit. Nulla
              blandit odio erat, nec aliquet velit efficitur a. Morbi mi erat,
              fermentum sed finibus eu, ultrices ut ligula. Curabitur arcu enim,
              aliquam a augue sit amet, bibendum consequat eros. Duis aliquet
              sodales nunc, at pulvinar dui pharetra ac. Nullam tristique
              fringilla erat in interdum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
