import Twitter from "../Assets/twitter.svg";
import Insta from "../Assets/insta.svg";
import Phone from "../Assets/phone.svg";
import Mail from "../Assets/mail.svg";

function Footer() {
  return (
    <footer className="footer-container">
      <section>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="/Calendar">Calendar</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Philosophy">Philosophy</a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Socials</h3>
        <ul>
          <li>
            <a href="">
              <img alt="social media" src={Twitter} />
            </a>
          </li>
          <li>
            <a href="">
              <img alt="social media" src={Insta} />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Contact</h3>
        <ul>
          <li>
            <img src={Mail} alt="email" />
            <p>email@goeshere.com</p>
          </li>

          <li>
            <img src={Phone} alt="email" />
            <p>(678)-232-9727</p>
          </li>
        </ul>
      </section>

      <div className="break"></div>
      <section>
        <p>@WilliamFrancoletti 2021</p>
      </section>
    </footer>
  );
}

export default Footer;
