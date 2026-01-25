import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section id="choose" className="choose-section">
        <div className="container">
          <div className="choose-container">
            {/* TODO: This image is horible tbh */}
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Zašto baš mi</h4>
                <h2>Najpovoljnije ponude koje ćete pronaći</h2>
                <p>
                  Pronađite najbolje ponude sa našim neprevaziđenim akcijama.
                  Posvećeni smo tome da dobijete najviše vrednosti za svoj
                  novac, kako biste uživali u uslugama i proizvodima vrhunskog
                  kvaliteta bez previsokih izdataka. Naše ponude su osmišljene
                  da vam pruže vrhunsko iskustvo iznajmljivanja — ne propustite
                  priliku da značajno uštedite.
                </p>
                <a href="#about">
                  Saznaj više &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  {/* TODO: I need blue icons here, maybe u can use this site for icons: https://undraw.co/ */}
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Vožnja kroz celu zemlju</h4>
                    <p>
                      Podignite svoje iskustvo vožnje na viši nivo uz naša
                      vrhunska vozila namenjena međugradskim avanturama.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cena sa svime uključenim</h4>
                    <p>
                      Dobijate sve što vam treba po jednoj preglednoj i
                      transparentnoj ceni zahvaljujući politici cena koja
                      obuhvata sve.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Bez skrivenih troškova</h4>
                    <p>
                      Uživajte u miru znajući da nema skrivenih troškova. Mi
                      verujemo u transparentno i pošteno formiranje cena.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
