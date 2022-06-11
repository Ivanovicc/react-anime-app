import { AnimeCard } from "components/Card/animeCard";
/* Styles */
import "./list.css";

export const AnimeList = ({ animes }) => {
  return (
    <div className="section-body">
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
