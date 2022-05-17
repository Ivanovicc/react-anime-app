import { AnimeList } from "components/Lists/animesList";
import { PaginationList } from "components/Pagination/paginationList";
import { useSearchForm } from "hooks/useSearch";
import { usePageTitle } from "hooks/usePageTitle";
import { Loading } from "components/Loading/loadingPage";

export const ResultsPage = ({ params }) => {
  const { key } = params;
  const { result, setPageOffset, loading, pageCount, pageOffset, loadingPage } =
    useSearchForm({
      key,
    });
  usePageTitle("Resultados de busqueda");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-results-page container">
          <AnimeList
            animes={result.animes}
            title={`Resultados de "${decodeURI(key)}"`}
          />
          {loadingPage ? (
            "Cargando..."
          ) : (
            <PaginationList
              count={pageCount}
              offset={pageOffset}
              setPageOffset={setPageOffset}
            />
          )}
        </main>
      )}
    </>
  );
};
