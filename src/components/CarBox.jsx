import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${car.price}</span>/ cena po danu
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Marka</span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Godina</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Vrata</span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Klima</span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Menjač</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Gorivo</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Rezerviši sada
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
