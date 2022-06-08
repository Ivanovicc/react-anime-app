import { AnimeCard } from "components/Card/animeCard";
/* Styles */
import "./list.css";

export const AnimeList = ({ animes, title }) => {
  return (
    <div className="section-body">
      <div className="section-title">
        <h5>{title}</h5>
      </div>
      <section className="list-section">
        <div className="list-grid container">
          <div className="row">
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
        </div>
      </section>
    </div>
  );
};
