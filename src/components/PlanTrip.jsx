import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section id="plan" className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Planirajte svoje putovanje sada</h3>
              <h2>Brzo i jednostavno iznajmljivanje automobila</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                {/* TODO: I need blue icons here, maybe u can use this site for icons: https://undraw.co/ */}
                <img src={SelectCar} alt="ikonica" />
                <h3>Izaberite automobil</h3>
                <p>
                  Nudimo širok izbor vozila za sve vaše potrebe. Imamo savršen
                  automobil koji odgovara vašim zahtevima.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="ikonica" />
                <h3>Kontaktirajte operatera</h3>
                <p>
                  Naši stručni i ljubazni operateri uvek su spremni da pomognu
                  sa svim pitanjima ili nedoumicama.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="ikonica" />
                <h3>Spremni za vožnju</h3>
                <p>
                  Bilo da krećete na otvoreni put, tu smo za vas sa širokim
                  izborom automobila.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
