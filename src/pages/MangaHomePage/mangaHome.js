/* Hooks */
import { useMangaPreviews } from "hooks/Mangas/useMangaPreviews";
import { usePageTitle } from "hooks/usePageTitle";
/* Components */
import { ListPreview } from "components/Lists/listPreview";
import { SkeletonLoading } from "components/Loading/skeletonLoading";

export const MangaHomePage = () => {
  const { loadingMangas, mangaBestRating, mangaInEmision, mangaMostPopular } =
    useMangaPreviews();

  usePageTitle("Mangas");

  return (
    <>
      {loadingMangas ? (
        <SkeletonLoading />
      ) : (
        <main className="main-manga row">
          <div className="main-col col-manga">
            <div className="main-body container">
              <ListPreview
                toPage="/mangas/popular-publication"
                animes={mangaInEmision}
                title="Mangas más populares en publicación"
              />
            </div>

            <div className="main-body container">
              <ListPreview
                toPage="/mangas/most-popular"
                animes={mangaMostPopular}
                title="Mangas más populares"
              />
            </div>

            <div className="main-body container">
              <ListPreview
                toPage="/mangas/top-rated"
                animes={mangaBestRating}
                title="Mangas mejor evaluados"
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
};
