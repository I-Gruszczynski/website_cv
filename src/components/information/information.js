import "./information.scss";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

const Information = () => {
  return (
    <div className="mainInfo">
      <h1>Igor Gruszczyński</h1>
      <h4>Frontend & Game Developer</h4>
      <div className="mainInfo-icons">
        <div className="mainInfo-icons-box">
          <a href="https://github.com/I-Gruszczynski">
            <FaGithub size={30} color="#ccc" />
          </a>
        </div>
        <div className="mainInfo-icons-box">
          <a href="https://www.linkedin.com/in/igor-gruszczy%C5%84ski-16bb7926a/">
            <FaLinkedin size={30} color="#ccc" />
          </a>
        </div>
        <div className="mainInfo-icons-box">
          <a href="https://www.facebook.com/igor.gruszczynski.9">
            <FaFacebookSquare size={30} color="#ccc" />
          </a>
        </div>
      </div>
      <div className="mainInfo-hobby">
        <p>
          Fan of traveling and learning about new cultures. Thanks to my
          volunteering and projects, I was able to get in touch with a lot of
          people abroad. In addition, I'm also interested in cinematography. In
          my free time, I organize bicycle trips or do various sports such as
          ping-pong or tennis.
        </p>
      </div>
      <div className="mainInfo-context">
        <div className="mainInfo-context-location">
          <FaLocationDot size={20} color="#3f1eb6" />
          <p>Wuhan, China</p>
        </div>
        <div className="mainInfo-context-break"></div>
        <div className="mainInfo-context-phonenumber">
          <FaPhone size={20} color="#3f1eb6" />
          <p>+86 123 123 123</p>
        </div>
        <div className="mainInfo-context-break"></div>
        <div className="mainInfo-context-email">
          <IoIosMail size={25} color="#3f1eb6" />
          <p>igor.grusz@gmail.com</p>
        </div>
        <div className="mainInfo-context-break"></div>

        <div className="mainInfo-btn">
          <button>
            <a href="https://drive.google.com/uc?export=download&id=1r6Wkv4FR2zjSgw5RHHszAsCp3wEVxVNP">
              <FiDownload color="#fff" size={22} />
              <span>Download CV</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
