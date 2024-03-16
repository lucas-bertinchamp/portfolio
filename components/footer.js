import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <div id="social">
        <div className="icon-box">
          <div className="icon-div">
            <a href="#" className="icon-link">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
          </div>
          <div className="icon-div">
            <a
              href="https://www.linkedin.com/in/lucas-bertinchamp-3b2975245/"
              className="icon-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
          <div className="icon-div">
            <a
              href="https://github.com/lucas-bertinchamp"
              className="icon-link"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div id="footerwrap">
        <p>
          <b>ÉTUDIANT POLYTECHNIQUE MONTREAL x MINES NANCY</b>
        </p>
        <p>Montreal</p>

        <p>bertinchamp.lucas@gmail.com</p>
      </div>
    </div>
  );
}
