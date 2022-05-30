import { AnimeCard } from "components/Card/animeCard";
/* Styles */
import "./list.css";

export const AnimeList = ({ animes, title }) => {
  return (
    <section className="list-section">
      <div className="section-title">
        <h3>{title}</h3>
      </div>
      <div className="list-grid">
        {animes?.map(({ id, poster, title, type, slug, subType }) => {
          return (
            <AnimeCard
              key={id}
              slug={slug}
              title={title}
              type={type}
              poster={poster}
              subType={subType}
            />
          );
        })}
      </div>
    </section>
  );
};
