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
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; carrental@xyz.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Bengaluru,
                Karnatka
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
