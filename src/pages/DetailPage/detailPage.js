/* Components */
import { Loading } from "components/Loading/loadingPage";
import { CoverImage } from "components/CoverImage/coverImage";
import { SideBarSection } from "components/SideBarSection/sideBar";
import { CenterColumnContent } from "components/CenterColumnContent/centerContent";
import { SideColumnContent } from "components/SideColumnContent/sideContent";
/* Hooks */
import { useDetail } from "hooks/Animes/useDetails";
import { usePageTitle } from "hooks/usePageTitle";
/* Styles */
import "./detail.css";

export const DetailPage = ({ params }) => {
  const { slug, content } = params;
  const { animeDetails, animeCategories, loading } = useDetail({
    slug,
    content,
  });

  usePageTitle(
    animeDetails.canonicalTitle ? animeDetails.canonicalTitle : "Cargando..."
  );

  const emision = (status) => {
    if (status === "current") {
      return "En emisión";
    }
    if (status === "finished") {
      return "Finalizado";
    } else {
      return "Por anunciar";
    }
  };

  return (
    <main className="main-details">
      {loading ? (
        <Loading />
      ) : (
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
                  animeDate={animeDetails.startDate}
                  description={animeDetails.description}
                  ratingAverage={animeDetails.averageRating}
                  tagsList={animeCategories}
                />
                <SideColumnContent
                  sideTitle="Más información"
                  englishTitle={animeDetails.titles?.en}
                  japanTitle={animeDetails.titles?.ja_jp}
                  romajiTitle={animeDetails.titles?.en_jp}
                  episodes={animeDetails.episodeCount}
                  status={emision(animeDetails.status)}
                  startDate={animeDetails?.startDate}
                  endDate={animeDetails?.endDate}
                  ratingAge={animeDetails.ageRating}
                  ratingGuide={animeDetails.ageRatingGuide}
                  episodeLength={animeDetails.episodeLength}
                  subType={animeDetails.subtype}
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
