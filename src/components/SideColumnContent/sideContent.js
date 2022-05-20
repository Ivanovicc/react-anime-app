export const SideColumnContent = ({
  sideTitle,
  englishTitle,
  japanTitle,
  romajiTitle,
  episodes,
  status,
  emisionDate,
  ratingAge,
  ratingGuide,
  animeLength,
}) => {
  return (
    <div className="col-center right-side">
      <div className="info-wrap">
        <h4>{sideTitle}</h4>
        <ul>
          <li style={{ display: englishTitle ? "flex" : "none" }}>
            <strong>Inglés </strong>
            <span>{englishTitle}</span>
          </li>
          <li style={{ display: japanTitle ? "flex" : "none" }}>
            <strong>Japones </strong>
            <span>{japanTitle}</span>
          </li>
          <li style={{ display: romajiTitle ? "flex" : "none" }}>
            <strong>Japones (Romaji) </strong>
            <span>{romajiTitle}</span>
          </li>
          <li style={{ display: episodes ? "flex" : "none" }}>
            <strong>Episodios </strong>
            <span>{episodes}</span>
          </li>
          <li style={{ display: status ? "flex" : "none" }}>
            <strong>Estado </strong>
            <span>{status}</span>
          </li>
          <li style={{ display: emisionDate ? "flex" : "none" }}>
            <strong>Emitido </strong>
            <span>{emisionDate}</span>
          </li>
          <li style={{ display: ratingAge || ratingGuide ? "flex" : "none" }}>
            <strong>Clasificación </strong>
            <span>{ratingAge + " - " + ratingGuide}</span>
          </li>
          <li style={{ display: animeLength ? "flex" : "none" }}>
            <strong>Duración </strong>
            <span>{animeLength}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
