export const CoverImage = ({ imageCover, altName }) => {
  return (
    <div className="cover-wrapper">
      <div>
        <img
          loading="lazy"
          className="cover-image"
          src={imageCover}
          alt={altName}
        />
        <div className="overlay"></div>
      </div>
    </div>
  );
};
