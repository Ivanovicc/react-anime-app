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
          <AnimeList animes={rating.animes} title="Animes mejor evaluados" />
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
