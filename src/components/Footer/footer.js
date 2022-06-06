import { GitHub, LinkedIn } from "@mui/icons-material";
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
          <a
            className="contact-link"
            href="https://github.com/Ivanovicc/react-anime-app"
            rel="noreferrer"
            target="_blank"
          >
            <span className="github">
              <GitHub />
            </span>
          </a>

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/ivan-acosta-carabajal-085931190/"
            rel="noreferrer"
            target="_blank"
          >
            <span className="linkedin">
              <LinkedIn />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
