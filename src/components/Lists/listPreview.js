import { AnimeCard } from "components/Card/animeCard";
import { Link } from "wouter";
/* Styles */
import "./listPreview.css";

export const ListPreview = ({ title, animes, toPage }) => {
  return (
    <div className="main-body">
      <div className="preview-title">
        <h5>{title}</h5>
        <div className="preview-link">
          <Link to={toPage}>Ver más</Link>
        </div>
      </div>
      <section className="preview-section">
        <div className="preview-grid container">
          <div className="row">
            {animes?.map(({ title, poster, id, type, slug, subType }) => {
              return (
                <AnimeCard
                  key={id}
                  slug={slug}
                  title={title}
                  poster={poster}
                  type={type}
                  subType={subType}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

/* <div className="main-body container">
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
          {animes?.map(({ title, poster, id, type, slug, subType }) => {
            return (
              <AnimeCard
                key={id}
                slug={slug}
                title={title}
                poster={poster}
                type={type}
                subType={subType}
              />
            );
          })}
        </div>
      </section>
    </div> */
