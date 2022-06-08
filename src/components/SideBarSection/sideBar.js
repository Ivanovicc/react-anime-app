export const SideBarSection = ({ imagePoster, altName }) => {
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
      </div>
    </div>
  );
};
