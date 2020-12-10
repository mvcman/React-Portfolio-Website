import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let currentUrl = window.location.href;
    console.log(currentUrl);
    if (currentUrl.endsWith("/about")) setActive("About");
    else if (currentUrl.endsWith("/resume")) setActive("Resume");
    else if (currentUrl.endsWith("/projects")) setActive("Projects");
  }, [active]);
  return (
    <div className="navbar">
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/about" className="navbar__link">
            <div className="navbar__item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}

        {active !== "Resume" && (
          <Link to="/resume" className="navbar__link">
            <div className="navbar__item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        )}
        {active !== "Projects" && (
          <Link to="/projects" className="navbar__link">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
