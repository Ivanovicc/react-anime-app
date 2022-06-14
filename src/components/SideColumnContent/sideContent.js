import { formatDate } from "utils/formatDate";
import { formatHour } from "utils/formatDuration";
import { toCapitalize } from "utils/toCapitalize";

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
  episodeLength,
  subType,
}) => {
  const noContent = (content) => {
    let display = content ? "flex" : "none";
    return display;
  };

  return (
    <div className="main-col right-side">
      <div className="info-wrap">
        <div className="info-container">
          <h5>{sideTitle}</h5>
          <ul>
            <li style={{ display: noContent(englishTitle) }}>
              <strong>Inglés </strong>
              <span>{englishTitle}</span>
            </li>
            <li style={{ display: noContent(japanTitle) }}>
              <strong>Japones </strong>
              <span>{japanTitle}</span>
            </li>
            <li style={{ display: noContent(romajiTitle) }}>
              <strong>Japones (Romaji) </strong>
              <span>{romajiTitle}</span>
            </li>
            <li style={{ display: noContent(subType) }}>
              <strong>Tipo </strong>
              <span>{toCapitalize(subType)}</span>
            </li>
            <li style={{ display: noContent(episodes) }}>
              <strong>Episodios </strong>
              <span>{episodes}</span>
            </li>
            <li style={{ display: noContent(status) }}>
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
            <li style={{ display: noContent(episodeLength) }}>
              <strong>Duración </strong>
              <span>
                {status === "En emisión"
                  ? `${episodeLength} minutos`
                  : formatHour(episodes, episodeLength)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
