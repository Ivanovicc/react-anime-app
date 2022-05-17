import { AnimeCard } from "components/Card/animeCard";
/* Styles */
import "./listPreview.css";

export const ListPreview = ({ title, animes }) => {
  return (
    <section className="preview-section">
      <div className="section-title">
        <h3>{title}</h3>
      </div>
      <div className="preview-grid">
        {animes.map(({ title, poster, id, type, slug }) => {
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
  );
};
