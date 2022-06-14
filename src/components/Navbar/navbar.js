import { SearchBar } from "components/SearchBar/searchBar";
import { Link } from "wouter";
/* Styles */
import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="nav-section">
      <div className="nav container">
        <div className="nav-title">
          <Link to="/">Sakura サクラ</Link>
        </div>
        <div className="navbar-box">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};
