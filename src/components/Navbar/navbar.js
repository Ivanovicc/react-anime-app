import { SearchBar } from "components/SearchBar/searchBar";
import { Link } from "wouter";
/* Styles */
import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="nav-section">
      <div className="nav container">
        <div className="nav-title">
          <Link to="/">
            <a>サクラ</a>
          </Link>
        </div>
        <div className="navbar-box">
          <Link to="/mangas">
            <a>
              <h3>Mangas</h3>
            </a>
          </Link>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};
