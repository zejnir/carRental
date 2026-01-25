import { useEffect, useState } from "react";
import HeroCar from "../images/hero/main-car.png";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 200) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Planirajte svoje putovanje sada</h4>
              <h1>
                Uštedite <span>mnogo</span> uz naš rent-a-car
              </h1>
              <p>
                Iznajmite automobil iz snova. Neuporedive cene, neograničena
                kilometraža, fleksibilne opcije preuzimanja i još mnogo toga.
              </p>
              <div className="hero-content__text__btns">
                <button
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                >
                  Rezervišite vožnju &nbsp;{" "}
                  <i className="fa-solid fa-circle-check"></i>
                </button>
              </div>
            </div>

            {/* TODO: I don't want this orange car here, can we find another image? */}
            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <svg
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
            <polyline points="6 15 12 9 18 15" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Hero;
