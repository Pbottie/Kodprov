import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>DEMO Streaming</h1>
      <div className="links">
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
