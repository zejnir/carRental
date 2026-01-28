import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function AboutSection() {
  return (
    <>
      <section id="about" className="about-page">
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>O kompaniji</h3>
              <h2>Upalite motor i vaša avantura počinje</h2>
              <p>
                Pouzdana kompanija posvećena bezbednosti i kvalitetu. Naše
                iskustvo i posvećenost klijentima garantuju bezbrižno putovanje
                — vozila su redovno održavana i spremna za svaku rutu.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  {/* TODO: I need blue icons here, maybe u can use this site for icons: https://undraw.co/ */}
                  <img src={Box1} alt="ikonica-automobila" />
                  <span>
                    <h4>20+</h4>
                    <p>Tipova automobila</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="ikonica" />
                  <span>
                    <h4>2</h4>
                    <p>Filijale</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="ikonica" className="last-fk" />
                  <span>
                    <h4>1</h4>
                    <p>Servis</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
