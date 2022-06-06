export const CoverImage = ({ imageCover, altName }) => {
  return (
    <div className="cover-wrapper">
      <div>
        <img
          loading="lazy"
          className="cover-image"
          src={imageCover ? imageCover : "/images/coverDefault.jpg"}
          alt={altName}
        />
        <div className="overlay"></div>
      </div>
    </div>
  );
};
