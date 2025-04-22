import { useState, useRef } from "react";
import line from "./images/SplashTitleLine.png";
import circles from "./images/SplashCircles.png";

function Splash() {
  const [showElement, setShowElement] = useState(true);
  const splashContainer = useRef();
  const handleButtonClick = () => {
    splashContainer.current.style.opacity = 0;
    setTimeout(function () {
      setShowElement(false);
    }, 1000);
  };
  if (showElement) {
    return (
      <div className="container splashcontainer" ref={splashContainer}>
        <div className="container splashheader">
          <img
            src={line}
            alt="line"
            className="splashheaderline"
            draggable="false"
          ></img>
          <h1 className="splashheaderplace">TESTING</h1>
          <h1 className="splashheaderlog">LOG</h1>
        </div>
        <div className="container splashtextandbutton">
          <h2>
            <span id="onestop">Follow along with me on my day</span>{" "}
            <span id="pennystocks">trading and web design journeys</span>
          </h2>
          <ul>
            <li id="splashli1">Started this blog on: 1/9/25</li>
            <li id="splashli2">Weekly updates for both trading and coding</li>
            <li id="splashli3">Day trading S&P/NASDAQ futures day: 0</li>
            <li id="splashli4">I&apos;m a current Computer Science Junior</li>
          </ul>
          <button className="splashgetstarted" onClick={handleButtonClick}>
            Welcome!
          </button>
        </div>
        <img
          src={circles}
          alt="circles"
          className="splashcircles"
          draggable="false"
        ></img>
      </div>
    );
  } else {
    return;
  }
}

export default Splash;
