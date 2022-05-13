import { Link } from "wouter";
/* Styles */
import "./card.css";

export const AnimeCard = ({ title, slug, poster, type }) => {
  return (
    <div className="anime-card">
      <Link to={`/anime_details/${slug}`}>
        <a href="#" className="card-wrapper">
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
        </a>
      </Link>
    </div>
  );
};

/* 
<article className="mv v por white-co">
<Link to={`/anime_details/${slug}`}>
  <header className="hd pd1">
    <h2 className="title fz4 sm-fz5 fwn mab0">{title}</h2>
  </header>
  <figure className="im brd1">
    <img src={poster} loading="lazy" alt={title} />
  </figure>
  <span className="tp poa z1 ttu pdx1">{type}</span>
</Link>
</article> */
