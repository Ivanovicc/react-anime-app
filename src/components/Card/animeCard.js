import { Link } from "wouter";
/* Styles */
import "./card.css";

export const AnimeCard = ({ title, slug, poster, type, subType }) => {
  return (
    <div className="anime-card">
      <div className="card-wrap">
        <div className="grid-poster">
          <div className="lazy-image">
            <img
              alt={title}
              className="poster-card"
              src={poster}
              loading="lazy"
            />
            <span className="span-type">{subType}</span>
          </div>

          <div className="card-title">
            <span className="title-name">{title}</span>
          </div>

          <div className="poster-overlay">
            <Link to={`/${type}/details/${slug}`}></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* <div className="anime-card">
<Link to={`/${type}/details/${slug}`}>
  <a>
    <div className="card-wrapper">
      <div className="poster-wrapper">
        <img
          alt={title}
          className="poster-card"
          src={poster}
          loading="lazy"
          width="170"
          height="240"
        />
        <span className="span-type">{subType}</span>
      </div>
      <div className="card-title">
        <h4 className="title-name">{title}</h4>
      </div>
    </div>
  </a>
</Link>
</div> */
