import "./aboutme.scss";
import { FaNewspaper } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";

const aboutme = () => {
  return (
    <div className="main-aboutme-bg">
      <div className="main-aboutme">
        <h1>About me</h1>
        <hr />
        <div className="main-aboutme-text">
          <p>
            Passionate Computer Science student from Poland. Currently on Master
            Degree in on of university in China, I'm strong interest in web
            application development and Unity game development. Proficient in
            front-end and back-end web technologies, including HTML, CSS,
            JavaScript, and frameworks like React and Node. Experienced in
            building interactive and engaging Unity games using C# and the Unity
            Engine. Eager to learn new technologies, solve complex problems, and
            contribute to innovative projects. Seeking opportunities to apply my
            skills in real-world applications and enhance my expertise in
            software development.
          </p>
        </div>
        <div className="main-aboutme-text-do">
          <h2>What I'm doing</h2>
          <div className="main-aboutme-text-do-box">
            <div className="main-aboutme-text-do-box-img">
              <FaNewspaper size={50} color="#ccc" />
            </div>
            <div className="main-aboutme-text-do-box-desc">
              <h3>Web developer</h3>
              <p>
                Create modern and responsive website using mostly the React and
                Node framework. Specialize in frond-end approach.
              </p>
            </div>
          </div>
          <div className="main-aboutme-text-do-box">
            <div className="main-aboutme-text-do-box-img">
              <IoLogoGameControllerB size={50} color="#ccc" />
            </div>
            <div className="main-aboutme-text-do-box-desc">
              <h3>Game developer</h3>
              <p>
                In free time creating 2D indie games using Unity engine and C#
                language as a solo developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutme;
