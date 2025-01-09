import line from "./images/SplashTitleLine.png";
import candlestick from "./images/Candlestick.png";

function Splash() {
  return (
    <div className="container">
      <div className="container splashheader">
        <img
          src={line}
          alt="line"
          className="splashheaderline"
          draggable="false"
        ></img>
        <h1 className="splashheaderplace">PLACE</h1>
        <h1>HOLDER</h1>
      </div>
      <div className="container splashtextandbutton">
        <h2>
          <span id="onestop">Your one stop shop for analyzing</span>{" "}
          <span id="pennystocks">penny stocks.</span>
        </h2>
        <ul>
          <li>Filter stocks by any metric</li>
          <li>Sentiment analysis</li>
          <li>NEW - track other trader&apos;s portfolios</li>
        </ul>
        <button className="splashgetstarted">Get Started</button>
      </div>
      <div className="splashellipse1"></div>
      <div className="splashellipse2"></div>
      <div className="splashellipse3"></div>
      <div className="splashellipse4"></div>
      <div className="splashellipse5"></div>
      <div className="splashellipse6"></div>
      <img
        src={candlestick}
        alt="candlestick"
        className="spashcandlestick"
        draggable="false"
      ></img>
    </div>
  );
}

export default Splash;
