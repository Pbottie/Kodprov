import { React, useState } from "react";
import "./Header.css";

function Header() {
  const [isShowing, setIsShowing] = useState(false);

  function toggleMenu() {
    isShowing ? setIsShowing(false) : setIsShowing(true);
  }

  return (
    <div className="header">
      <h1>DEMO Streaming</h1>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className={isShowing ? "links expanded" : "links"}>
        <button>
          <a href=""> Log In </a>
        </button>
        <button>
          <a href=""> Register</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
