/* Components */
import { AnimeList } from "components/Lists/animesList";
import { PaginationList } from "components/Pagination/paginationList";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { useSearchForm } from "hooks/Animes/useSearch";
import { usePageTitle } from "hooks/usePageTitle";

export const ResultsPage = ({ params }) => {
  const { key } = params;
  const { result, setPageOffset, pageCount, pageOffset, loading } =
    useSearchForm({ key });

  const { animes, meta } = result;

  usePageTitle("Resultados de busqueda");

  return (
    <main className="main-results-page container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <AnimeList
            animes={animes}
            title={`${meta?.count} resultados de "${decodeURI(key)}"`}
          />

          <PaginationList
            count={pageCount}
            offset={pageOffset}
            setPageOffset={setPageOffset}
          />
        </>
      )}
    </main>
  );
};
