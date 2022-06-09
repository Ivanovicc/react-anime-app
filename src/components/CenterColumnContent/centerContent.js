import { Link } from "wouter";
import { FavoriteBorderRounded, StarOutlineRounded } from "@mui/icons-material";
import { ReadMore } from "components/ReadMore/readMore";

export const CenterColumnContent = ({
  titleAnime,
  animeDate,
  ratingAverage,
  description,
  tagsList,
  rankPopularity,
  rankRating,
}) => {
  return (
    <div className="main-col">
      <div className="title-anime">
        <h3 className="canonical-title">{titleAnime}</h3>
        <h5>{animeDate?.substring(0, 4)}</h5>
      </div>
      <div
        className="rating-anime"
        style={{ display: ratingAverage ? "block" : "none" }}
      >
        <span
          className={
            ratingAverage <= 60
              ? "average-rating very-low"
              : "average-rating" && ratingAverage <= 70
              ? "average-rating low"
              : "average-rating" && ratingAverage <= 80
              ? "average-rating good"
              : "average-rating"
          }
        >
          {ratingAverage}% de popularidad en la comunidad
        </span>
      </div>
      <div className="description-anime">
        <ReadMore text={description} limit={480} index={479} />
      </div>
      <div className="ranking-wrap">
        <span className="popular-rank ranking">
          <FavoriteBorderRounded />
          N°{rankPopularity} en popularidad
        </span>
        <span
          className="rating-rank ranking"
          style={{ display: rankRating ? "inherit" : "none" }}
        >
          <StarOutlineRounded />
          N°{rankRating} mejor evaluado
        </span>
      </div>
      <div className="wrap-tags">
        <div className="tags-title">
          <h4>Categorías: </h4>
        </div>
        <ul className="tags-list">
          {tagsList?.map((name) => {
            return (
              <li key={name} className="tags-item">
                <Link to={`/category/${name}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
