/* Components */
import { Loading } from "components/Loading/loadingPage";
import { CoverImage } from "components/CoverImage/coverImage";
import { SideBarSection } from "components/SideBarSection/sideBar";
import { CenterColumnContent } from "components/CenterColumnContent/centerContent";
import { SideColumnContent } from "components/SideColumnContent/sideContent";
/* Hooks */
import { useDetail } from "hooks/Animes/useDetails";
import { usePageTitle } from "hooks/usePageTitle";
import { formatDate } from "hooks/formatDate";
import { formatHour } from "hooks/formatDuration";
/* Styles */
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
            <CoverImage
              altName={animeDetails.canonicalTitle}
              imageCover={animeDetails.coverImage?.original}
            />
            <section className="section-details container">
              <SideBarSection
                altName={animeDetails.canonicalTitle}
                imagePoster={animeDetails.posterImage?.medium}
                rankPopularity={animeDetails.popularityRank}
                rankRating={animeDetails.ratingRank}
              />
              <div className="div-center row">
                <div className="row">
                  <CenterColumnContent
                    titleAnime={animeDetails.canonicalTitle}
                    animeDate={animeDetails.startDate?.substring(0, 4)}
                    description={animeDetails.description}
                    ratingAverage={animeDetails.averageRating}
                    tagsList={animeCategories}
                  />
                  <SideColumnContent
                    sideTitle="Detalles del Anime"
                    englishTitle={animeDetails.titles?.en}
                    japanTitle={animeDetails.titles?.ja_jp}
                    romajiTitle={animeDetails.titles?.en_jp}
                    episodes={animeDetails.episodeCount}
                    status={animeDetails.status}
                    emisionDate={formatDate(
                      animeDetails?.startDate,
                      animeDetails?.endDate
                    )}
                    ratingAge={animeDetails.ageRating}
                    ratingGuide={animeDetails.ageRatingGuide}
                    animeLength={formatHour(animeDetails.totalLength)}
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
};
