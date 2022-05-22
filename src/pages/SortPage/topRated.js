/* Components */
import { AnimeList } from "components/Lists/animesList";
import { Loading } from "components/Loading/loadingPage";
import { PaginationList } from "components/Pagination/paginationList";
/* Hooks */
import { useRatingPreviews } from "hooks/Animes/usePreviews";
import { usePageTitle } from "hooks/usePageTitle";

export const TopRated = () => {
  const { rating, pageCount, pageOffset, setPageOffset, loading } =
    useRatingPreviews({ limit: 18 });

  usePageTitle("Animes mejor evaluados");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-rating container">
          <AnimeList animes={rating.animes} title="Animes mejor evaluados" />

          <PaginationList
            count={pageCount}
            offset={pageOffset}
            setPageOffset={setPageOffset}
          />
        </main>
      )}
    </>
  );
};