import Logo from "../images/logo/logo_werent.png";
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
            <svg
              className="icon icon-close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="#home">
                Početna
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#choose">
                Zašto baš mi
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#models">
                Vozila
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#contact">
                Kontakt
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                O nama
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
                Početna
              </a>
            </li>
            <li>
              <a className="choose-link" href="#choose">
                Zašto baš mi
              </a>
            </li>
            <li>
              <a className="models-link" href="#models">
                Vozila
              </a>
            </li>
            <li>
              <a className="contact-link" href="#contact">
                Kontakt
              </a>
            </li>
            <li>
              <a className="about-link" href="#about">
                O nama
              </a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__register" href="#contact">
              Kontaktirajte nas
            </a>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <svg
              className="icon icon-hamb"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
