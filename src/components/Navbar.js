import React from 'react';

export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(13, 13, 13, 0.9)'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/favicon.ico" alt="Logo" width="35" height="35" />
          </a>
          <a className="navbar-brand text-light" href="/">Newsphere</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
