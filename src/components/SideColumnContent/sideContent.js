import { formatDate } from "hooks/formatDate";
import { formatHour } from "hooks/formatDuration";

export const SideColumnContent = ({
  sideTitle,
  englishTitle,
  japanTitle,
  romajiTitle,
  episodes,
  status,
  startDate,
  endDate,
  ratingAge,
  ratingGuide,
  animeLength,
}) => {
  return (
    <div className="main-col right-side">
      <div className="info-wrap">
        <div className="info-container">
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
            <li style={{ display: startDate || endDate ? "flex" : "none" }}>
              <strong>Emisión </strong>
              <span>{formatDate(startDate, endDate)}</span>
            </li>
            <li>
              <strong>Clasificación </strong>
              <span>
                {ratingGuide === null
                  ? ratingAge
                  : ratingAge + " - " + ratingGuide}
              </span>
            </li>
            <li style={{ display: animeLength ? "flex" : "none" }}>
              <strong>Duración </strong>
              <span>{formatHour(animeLength)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
