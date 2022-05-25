export const CoverImage = ({ imageCover, altName }) => {
  return (
    <div className="cover-wrapper">
      <div>
        <img
          width="1350"
          height="350"
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
