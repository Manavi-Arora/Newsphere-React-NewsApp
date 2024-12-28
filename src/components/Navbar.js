import React from "react";
import { Link,useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // Get the current location

  // Helper function to check if the current path matches the category
  const isActive = (category) => {
    if(category === "/general"){
      return location.pathname === "/" ? "nav-link text-danger" : "nav-link text-light";
    }
    return location.pathname === category ? "nav-link text-danger" : "nav-link text-light";
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "rgba(13, 13, 13, 0.9)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/favicon.ico" alt="Logo" width="35" height="35" />
          </a>
          <Link className="navbar-brand text-light" href="/">
            Newsphere
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={isActive("/general")}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className={isActive("/business")} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/entertainment")} to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/health")} to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/science")} to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/sports")} to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/technology")} to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
