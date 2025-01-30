import "./information.scss";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

const Information = () => {
  return (
    <div className="mainInfo">
      <h1>Igor Gruszczyński</h1>
      <h3>Frontend & Game Developer</h3>
      <div className="mainInfo-icons">
        <div className="mainInfo-icons-box">
          <FaGithub size={30} color="#ccc" />
        </div>
        <div className="mainInfo-icons-box">
          <FaLinkedin size={30} color="#ccc" />
        </div>
        <div className="mainInfo-icons-box">
          <FaFacebookSquare size={30} color="#ccc" />
        </div>
      </div>
      <hr />
      <div className="mainInfo-context">
        <div className="mainInfo-context-location">
          <FaLocationDot size={20} color="#3f1eb6" />
          <p>Wuhan, China</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="mainInfo-context-phonenumber">
          <FaPhone size={20} color="#3f1eb6" />
          <p>+86 123 123 123</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="mainInfo-context-email">
          <IoIosMail size={25} color="#3f1eb6" />
          <p>igor.grusz@gmail.com</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="mainInfo-btn">
          <button>
            <FiDownload color="#fff" size={22} />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
