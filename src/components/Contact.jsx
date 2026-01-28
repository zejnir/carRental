function Contact() {
  return (
    <>
      <section id="contact" className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Trebate dodatne informacije?</h2>
              <p>
                Svestran stručnjak sa iskustvom u istraživanju i razvoju, kao i
                specijalista za obuku. Više od 15 godina iskustva.
              </p>
              <a href="tel:+38163405969">
                <i className="fa-solid fa-phone"></i>&nbsp; +381 63 405969
              </a>
              <a href="mailto:info@we-rent.rs">
                <i className="fa-solid fa-envelope"></i>&nbsp; info@we-rent.rs
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; BULEVAR
                VOJVODE MIŠIĆA 24, 11000, Beograd (Savski Venac), Srbija
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Ime i prezime <b>*</b>
                </label>
                <input type="text" placeholder='Npr: "Jovan Jović"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="vasemail@primer.com"></input>

                <label>
                  Ispričajte nam ukratko <b>*</b>
                </label>
                <textarea placeholder="Napišite ovde..."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp;
                  Pošalji poruku
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
