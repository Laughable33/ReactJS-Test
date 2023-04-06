import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">butteredcheese.org</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://mongotomsbadasswebsite.com">Mongo Tom</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://fellagame.com">Fella Game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/@butteredcheese_org/featured">Youtube</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://kasm.butteredcheese.org">Kasm</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://bigcummies.xyz/">Unblocker</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
