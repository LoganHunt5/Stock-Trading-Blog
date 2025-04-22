import line from "./images/SplashTitleLine.png";
import codingicon from "./images/CodingIcon.png";
import tradingicon from "./images/TradingIcon.png";

function Dropdown({ name }) {
  if (name === "Blog") {
    return (
      <div className="dropdown">
        <button className="headerword dropdownlink">Blog</button>
        <div className="dropdown-menu">
          <div className="dropitem">
            <img src={codingicon} alt="codingicon" draggable="false"></img>
            <p id="dropcoding">Coding</p>
          </div>
          <div className="blogdropdivider"></div>
          <div className="dropitem">
            <img src={tradingicon} alt="tradingicon" draggable="false"></img>
            <p>Trading</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdown">
        <button className="headerword dropdownlink">Links</button>
        <div className="dropdown-menu">
          <div className="dropitem">
            <img src={codingicon} alt="codingicon" draggable="false"></img>
            <p id="dropcoding">Github</p>
          </div>
          <div className="blogdropdivider"></div>
          <div className="dropitem">
            <img src={tradingicon} alt="tradingicon" draggable="false"></img>
            <p>CodePen</p>
          </div>
          <div className="dropitem">
            <img src={tradingicon} alt="tradingicon" draggable="false"></img>
            <p>CodePen</p>
          </div>
          <div className="dropitem">
            <img src={tradingicon} alt="tradingicon" draggable="false"></img>
            <p>CodePen</p>
          </div>
        </div>
      </div>
    );
  }
}

function HeaderWords() {
  return (
    <div className="container header">
      <div className="headerleft">
        <h1 className="headerplace">TESTING</h1>
        <h1 className="headerlog">LOG</h1>
      </div>
      <div className="headerright">
        <Dropdown name="Blog" />
        <h2 className="headerword">About</h2>
        <Dropdown name="Links" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="headercontainer">
      <img
        className="headerline"
        src={line}
        alt="headerline"
        draggable="false"
      ></img>
      <HeaderWords />
    </div>
  );
}

export default Header;
