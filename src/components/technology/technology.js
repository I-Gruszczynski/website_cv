import { useState } from "react";
import "./technology.scss";

const Technology = () => {
  let count = 0;
  const [isOpenReact, SetIsOpenReact] = useState(false);
  const [isOpenNode, SetIsOpenNode] = useState(false);
  const [isOpenNet, SetIsOpenNet] = useState(false);
  const [isOpenBootstrap, SetIsOpenBootstrap] = useState(false);

  const [isOpenHtml, SetIsOpenHtml] = useState(false);
  const [isOpenCsharp, SetIsOpenCsharp] = useState(false);
  const [isOpenSass, SetIsOpenSass] = useState(false);
  const [isOpenPhp, SetIsOpenPhp] = useState(false);

  const [isOpenVisual, SetIsOpenVisual] = useState(false);
  const [isOpenVisualStudio, SetIsOpenVisualStudio] = useState(false);
  const [isOpenUnity, SetIsOpenUnity] = useState(false);
  const [isOpenData, SetIsOpenData] = useState(false);

  return (
    <div className="main-technology-bg">
      <div className="main-technology">
        <h1>Technology</h1>
        <hr />
        <div className="main-technology-box">
          <h3>Frameworks</h3>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenReact(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenReact(false);
                }
              }}
              src="./reactIcon.png"
              alt="React"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenReact
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenNode(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenNode(false);
                }
              }}
              src="./nodeIcon.png"
              alt="Node"
              width={100}
              height={80}
            />
            <p
              className={
                isOpenNode
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenNet(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenNet(false);
                }
              }}
              src="./netIcon.png"
              alt="Net"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenNet
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenBootstrap(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenBootstrap(false);
                }
              }}
              src="./bootstrapLogo.png"
              alt="Bootstrap"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenBootstrap
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
        </div>
        <div className="main-technology-box">
          <h3>Programing languages</h3>
          <div
            className="main-technology-box-mainlang"
            onClick={(e) => {
              count++;
              console.log(count);
              if (count % 2) {
                document.querySelector(
                  ".main-technology-box-mainlang-html"
                ).style.transform = "translate(-70px, 0px)";
                document.querySelector(
                  ".main-technology-box-mainlang-html"
                ).style.transition = "transform 500ms ease-in-out";
                document.querySelector(
                  ".main-technology-box-mainlang-css"
                ).style.transform = "translate(-150px, 0px)";
                document.querySelector(
                  ".main-technology-box-mainlang-css"
                ).style.transition = "transform 500ms ease-in-out";
                document.querySelector(
                  ".main-technology-box-mainlang-js"
                ).style.transform = "translate(-230px, 0px)";
                document.querySelector(
                  ".main-technology-box-mainlang-js"
                ).style.transition = "transform 500ms ease-in-out";
                SetIsOpenHtml(true);
              } else {
                document.querySelector(
                  ".main-technology-box-mainlang-html"
                ).style.transform = "translate(0px, 0px)";
                document.querySelector(
                  ".main-technology-box-mainlang-css"
                ).style.transform = "translate(0px, 0px)";
                document.querySelector(
                  ".main-technology-box-mainlang-js"
                ).style.transform = "translate(0px, 0px)";
                SetIsOpenHtml(false);
              }
            }}
          >
            <img
              className="main-technology-box-mainlang-html"
              src="./htmlIcon.png"
              alt="Html"
              width={80}
              height={80}
            />
            <img
              className="main-technology-box-mainlang-css"
              src="./cssIcon.png"
              alt="Css"
              width={80}
              height={80}
            />
            <img
              className="main-technology-box-mainlang-js"
              src="./jsIcon.png"
              alt="Javascript"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenHtml
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenCsharp(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenCsharp(false);
                }
              }}
              className="main-technology-box-img"
              src="./csharpIcon.png"
              alt="Csharp"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenCsharp
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenSass(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenSass(false);
                }
              }}
              className="main-technology-box-img"
              src="./sassIcon.png"
              alt="Sass"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenSass
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenPhp(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenPhp(false);
                }
              }}
              className="main-technology-box-img"
              src="./phpIcon.png"
              alt="Php"
              width={100}
              height={80}
            />
            <p
              className={
                isOpenPhp
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
        </div>
        <div className="main-technology-box">
          <h3>Programs</h3>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenVisual(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenVisual(false);
                }
              }}
              className="main-technology-box-img"
              src="./visualLogo.png"
              alt="Visual"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenVisual
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenVisualStudio(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenVisualStudio(false);
                }
              }}
              className="main-technology-box-img"
              src="./visualstudioLogo.png"
              alt="VisualStudio"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenVisualStudio
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div className="main-technology-box-lang">
            <img
              onClick={(e) => {
                count++;
                console.log(count);
                if (count % 2) {
                  e.target.style.transform = "translate(-150px, 0px)";
                  e.target.style.transition = "transform 500ms ease-in-out";
                  SetIsOpenUnity(true);
                } else {
                  e.target.style.transform = "translate(0px, 0px)";
                  SetIsOpenUnity(false);
                }
              }}
              className="main-technology-box-img"
              src="./unityIcon.png"
              alt="Unity"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenUnity
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
          <div
            className="main-technology-box-database"
            onClick={(e) => {
              count++;
              console.log(count);
              if (count % 2) {
                document.querySelector(
                  ".main-technology-box-database-mysql"
                ).style.transform = "translate(-100px, 0px)";
                document.querySelector(
                  ".main-technology-box-database-mysql"
                ).style.transition = "transform 500ms ease-in-out";
                document.querySelector(
                  ".main-technology-box-database-mongo"
                ).style.transform = "translate(100px, 0px)";
                document.querySelector(
                  ".main-technology-box-database-mongo"
                ).style.transition = "transform 500ms ease-in-out";
                SetIsOpenData(true);
              } else {
                document.querySelector(
                  ".main-technology-box-database-mysql"
                ).style.transform = "translate(0px, 0px)";
                document.querySelector(
                  ".main-technology-box-database-mongo"
                ).style.transform = "translate(0px, 0px)";
                SetIsOpenData(false);
              }
            }}
          >
            <img
              className="main-technology-box-database-mysql"
              src="./mysqlIcon.png"
              alt="Mysql"
              width={80}
              height={80}
            />
            <img
              className="main-technology-box-database-mongo"
              src="./mongoIcon.png"
              alt="Mongo"
              width={80}
              height={80}
            />
            <p
              className={
                isOpenData
                  ? "main-technology-box-lang-paragrath-active"
                  : "main-technology-box-lang-paragrath"
              }
            >
              sdaeafeffadaergrgnrfninwidand wiadnaiwnd na wninani awda wnd na
              wnina
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
