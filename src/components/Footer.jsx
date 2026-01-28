function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li className="footer-desc">
                Nudimo širok izbor vozila za sve vaše potrebe. Imamo idealan
                automobil koji odgovara vašim zahtevima.
              </li>
              <li>
                <a href="tel:+38163405969">
                  <i className="fa-solid fa-phone"></i> &nbsp; +381 63 405969
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                info@we-rent.rs"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; info@we-rent.rs
                </a>
              </li>

              {/* <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://devrahuls.vercel.app/"
                >
                  Design with ❤️ by Rahul
                </a>
              </li> */}
            </ul>

            <ul className="footer-content__2">
              <li>Meni</li>
              <li>
                <a href="#home">Početna</a>
              </li>
              <li>
                <a href="#choose">Zašto baš mi</a>
              </li>
              <li>
                <a href="#models">Vozila</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
              <li>
                <a href="#about">O nama</a>
              </li>
              <li>
                <a className="footer-contact" href="#contact">
                  Kontaktirajte nas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
