/* Hooks */
import { useMangaPreviews } from "hooks/Mangas/useMangaPreviews";
import { usePageTitle } from "hooks/usePageTitle";
/* Components */
import { ListPreview } from "components/Lists/listPreview";
import { Loading } from "components/Loading/loadingPage";

export const MangaHomePage = () => {
  const { loadingMangas, mangaBestRating, mangaInEmision, mangaMostPopular } =
    useMangaPreviews();

  usePageTitle("Mangas");

  return (
    <>
      {loadingMangas ? (
        <Loading />
      ) : (
        <main className="main-manga row">
          <div className="main-col col-manga">
            <div className="main-body container">
              <ListPreview
                animes={mangaInEmision}
                title="Mangas más populares en publicación"
              />
            </div>

            <div className="main-body container">
              <ListPreview
                animes={mangaMostPopular}
                title="Mangas más populares"
              />
            </div>

            <div className="main-body container">
              <ListPreview
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
