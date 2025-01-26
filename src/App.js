import "./App.css";
import Header from "./components/header/header.js";
import Aboutme from "./components/aboutme/aboutme.js";

function App() {
  return (
    <div className="App">
      <div className="main-mybio">
        <img
          src="./279726132_4860771730687869_5937944396472994506_n.jpg"
          width={150}
          height={150}
          alt="Igor"
        />
      </div>
      <div className="main-content"></div>
    </div>
  );
}

export default App;
