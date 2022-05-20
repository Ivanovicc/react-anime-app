import { Link } from "wouter";

export const CenterColumnContent = ({
  titleAnime,
  animeDate,
  ratingAverage,
  description,
  tagsList,
}) => {
  return (
    <div className="col-center">
      <div className="title-anime">
        <h1 className="canonical-title">{titleAnime}</h1>
        <h3>{animeDate}</h3>
      </div>
      <div className="rating-anime">
        <h4
          className={
            ratingAverage >= 74 ? "average-rating" : "average-rating less"
          }
        >
          {ratingAverage}% de popularidad en la comunidad
        </h4>
      </div>
      <div className="description-anime">
        <p className="description">{description}</p>
      </div>
      <div className="wrap-tags">
        <ul className="tags-list">
          {tagsList?.map((name) => {
            return (
              <li key={name} className="tags-item">
                <Link to={`/anime/category/${name}`}>
                  <a>{name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
