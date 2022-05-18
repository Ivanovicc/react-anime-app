import { Link } from "wouter";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { useDetail } from "hooks/Animes/useDetails";
import { usePageTitle } from "hooks/usePageTitle";
/* Styles */
import { FavoriteBorderRounded, StarOutlineRounded } from "@mui/icons-material";
import "./detail.css";

export const DetailPage = ({ params }) => {
  const { slug } = params;
  const { animeDetails, animeCategories, loading } = useDetail({ slug });

  usePageTitle(
    !animeDetails.canonicalTitle ? "Cargando..." : animeDetails.canonicalTitle
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-details">
          <div className="row">
            <div className="cover-wrapper">
              <div>
                <img
                  className="cover-image"
                  src={animeDetails.coverImage?.original}
                  alt={animeDetails.canonicalTitle}
                />
                <div className="overlay"></div>
              </div>
            </div>
            <section className="section-details container">
              <div className="sidebar-section">
                <div className="aside-wrap">
                  <div className="poster-wrap">
                    <img
                      src={animeDetails.posterImage?.medium}
                      className="poster-img"
                      alt={animeDetails.canonicalTitle}
                    />
                  </div>
                  <div className="ranking-wrap">
                    <span className="popular-rank ranking">
                      <FavoriteBorderRounded />
                      N°{animeDetails.popularityRank} en popularidad
                    </span>
                    <span className="rating-rank ranking">
                      <StarOutlineRounded />
                      N°{animeDetails.ratingRank} en mejor evaluado
                    </span>
                  </div>
                </div>
              </div>
              <div className="div-center row">
                <div className="row">
                  <div className="col-center">
                    <div className="title-anime">
                      <h1 className="canonical-title">
                        {animeDetails.canonicalTitle}
                      </h1>
                      <h3>{animeDetails.startDate?.substring(0, 4)}</h3>
                    </div>
                    <div className="rating-anime">
                      <h4
                        className={
                          animeDetails.averageRating >= 74
                            ? "average-rating"
                            : "average-rating less"
                        }
                      >
                        {animeDetails.averageRating}% de popularidad en la
                        comunidad
                      </h4>
                    </div>
                    <div className="description-anime">
                      <p className="description">{animeDetails.description}</p>
                    </div>
                    <div className="wrap-tags">
                      <ul className="tags-list">
                        {animeCategories.map((name) => {
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
                  <div className="col-center right-side">
                    <div className="info-wrap">
                      <h4>Detalles del Anime</h4>
                      <ul>
                        <li>
                          <strong>Inglés</strong>
                          <span>{animeDetails.titles?.en}</span>
                        </li>
                        <li>
                          <strong>Japones</strong>
                          <span>{animeDetails.titles?.ja_jp}</span>
                        </li>
                        <li>
                          <strong>Japones (Romaji)</strong>
                          <span>{animeDetails.titles?.en_jp}</span>
                        </li>
                        <li>
                          <strong>Episodios</strong>
                          <span>{animeDetails.episodeLength}</span>
                        </li>
                        <li>
                          <strong>Estado</strong>
                          <span>{animeDetails.status}</span>
                        </li>
                        <li>
                          <strong></strong>
                          <span></span>
                        </li>
                        <li>
                          <strong></strong>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
};
