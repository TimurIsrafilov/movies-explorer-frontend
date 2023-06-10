function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__copyright-container">
          <p className="footer__copyright">© 2023</p>
          <div className="footer__link-container">
            <a
              className="footer__copyright"
              target="_blank"
              href="https://practicum.yandex.ru/"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__copyright"
              target="_blank"
              href="https://github.com/TimurIsrafilov"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
