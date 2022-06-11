/* Components */
import { AnimeList } from "components/Lists/animesList";
import { Loading } from "components/Loading/loadingPage";
import { PaginationList } from "components/Pagination/paginationList";
/* Hooks */
import { useRatingPreviews } from "hooks/Animes/usePreviews";
import { usePageTitle } from "hooks/usePageTitle";
/* Styles */
import "./sortPage.css";

export const TopRated = () => {
  const { rating, pageCount, pageOffset, setPageOffset, loading } =
    useRatingPreviews({ limit: 20 });

  usePageTitle("Animes mejor evaluados");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-rating container">
          <div className="section-title">
            <h5>Animes mejor evaluados</h5>
          </div>
          <AnimeList animes={rating.animes} />
          <div className="pag-container">
            <PaginationList
              count={pageCount}
              offset={pageOffset}
              setPageOffset={setPageOffset}
            />{" "}
          </div>
        </main>
      )}
    </>
  );
};
