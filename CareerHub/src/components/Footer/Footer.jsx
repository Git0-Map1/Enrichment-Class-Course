import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="footer__logo-mark">CH</span>
            CareerHub <span className="footer__logo-lite">Lite</span>
          </a>
          <p className="footer__tagline">
            A simpler way to find your next role.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Product</h4>
          <a href="#" className="footer__link">
            Home
          </a>
          <a href="#" className="footer__link">
            Jobs
          </a>
          <a href="#" className="footer__link">
            Companies
          </a>
          <a href="#" className="footer__link">
            About
          </a>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <a href="#" className="footer__link">
            Careers
          </a>
          <a href="#" className="footer__link">
            Blog
          </a>
          <a href="#" className="footer__link">
            Contact
          </a>
          <a href="#" className="footer__link">
            Privacy
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 CareerHub Lite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
