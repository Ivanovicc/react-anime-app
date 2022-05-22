import { AnimeCard } from "components/Card/animeCard";
import { Link } from "wouter";
/* Styles */
import "./listPreview.css";

export const ListPreview = ({ title, animes, toPage }) => {
  return (
    <div className="main-body container">
      <section className="preview-section">
        <div className="preview-title">
          <h3>{title}</h3>
          <div className="preview-link">
            <Link to={toPage}>
              <a>Ver más</a>
            </Link>
          </div>
        </div>
        <div className="preview-grid">
          {animes?.map(({ title, poster, id, type, slug }) => {
            return (
              <AnimeCard
                key={id}
                slug={slug}
                title={title}
                poster={poster}
                type={type}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
