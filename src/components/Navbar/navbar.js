import { SearchBar } from "components/SearchBar/searchBar";
import { Link } from "wouter";
/* Styles */
import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="nav-section">
      <div className="container">
        <div className="nav-title">
          <Link to="/">
            <a>モ・ン・ド・ンゴ</a>
          </Link>
        </div>
        <div className="navbar-box">
          <Link to="/mangas">
            <a>
              <h3>Mangas</h3>
            </a>
          </Link>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};
