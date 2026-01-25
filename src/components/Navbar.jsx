import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#choose">
                Choose
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#models">
                Models
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#plan">
                Plan Trip
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                About
              </a>
            </li>
          </div>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <a href="#home" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </a>
          </div>
          <ul className="navbar__links">
            <li>
              <a className="home-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="choose-link" href="#choose">
                Choose
              </a>
            </li>
            <li>
              <a className="models-link" href="#models">
                Vehicle Models
              </a>
            </li>
            <li>
              <a className="plan-link" href="#plan">
                Plan Trip
              </a>
            </li>
            <li>
              <a className="contact-link" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="about-link" href="#about">
                About
              </a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__register" href="#contact">
              Kontkatirajte nas
            </a>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
