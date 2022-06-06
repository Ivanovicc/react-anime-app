import { FavoriteBorderRounded, StarOutlineRounded } from "@mui/icons-material";

export const SideBarSection = ({
  imagePoster,
  altName,
  rankPopularity,
  rankRating,
}) => {
  return (
    <div className="sidebar-section">
      <div className="aside-wrap">
        <div className="poster-wrap">
          <img
            loading="lazy"
            src={imagePoster}
            className="poster-img"
            alt={altName}
          />
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
      </div>
    </div>
  );
};
