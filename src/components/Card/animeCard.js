import { Link } from "wouter";
/* Styles */
import "./card.css";

export const AnimeCard = ({ title, slug, poster, type }) => {
  return (
    <div className="anime-card">
      <Link to={`/anime_details/${slug}`}>
        <a>
          <div className="card-wrapper">
            <div className="poster-wrapper">
              <img
                alt={title}
                className="poster-card"
                src={poster}
                lazy="loaded"
              />
              {/*  <span className="span-type">{type}</span> */}
            </div>
            <div className="card-title">
              <h4 className="title-name">{title}</h4>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
