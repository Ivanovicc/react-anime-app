import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "wouter";
import { GITHUB, LINKEDIN } from "api/settings";
/* Styles */
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer container">
        <div className="bottom-title">
          <h3>Gracias por su visita!</h3>
        </div>
        <div className="bottom-media">
          <Link to={`${GITHUB}`}>
            <a className="contact-link">
              <span>
                <GitHub />
              </span>
            </a>
          </Link>

          <Link to={`${LINKEDIN}`}>
            <a className="contact-link">
              <span>
                <LinkedIn />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
