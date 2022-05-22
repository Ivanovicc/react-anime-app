/* Components */
import { AnimeList } from "components/Lists/animesList";
import { Loading } from "components/Loading/loadingPage";
import { PaginationList } from "components/Pagination/paginationList";
/* Hooks */
import { useEmisionPreviews } from "hooks/Animes/usePreviews";
import { usePageTitle } from "hooks/usePageTitle";

export const PopularInEmision = () => {
  const { inEmision, pageCount, pageOffset, setPageOffset, loading } =
    useEmisionPreviews({ limit: 18 });

  usePageTitle("Animes populares en emision");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-in-emision container">
          <AnimeList
            animes={inEmision.animes}
            title="Animes populares en emision"
          />

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
