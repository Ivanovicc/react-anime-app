/* Components */
import { AnimeList } from "components/Lists/animesList";
import { PaginationList } from "components/Pagination/paginationList";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { useSearchForm } from "hooks/Animes/useSearch";
import { usePageTitle } from "hooks/usePageTitle";
/* Styles */
import "./resultPage.css";

export const ResultsPage = ({ params }) => {
  const { key } = params;
  const { result, setPageOffset, pageCount, pageOffset, loading } =
    useSearchForm({ key });

  const { animes, meta } = result;

  usePageTitle("Resultados de busqueda");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-results-page row container">
          <div className="section-title">
            <h5>{`${meta?.count} resultados de "${decodeURI(key)}"`}</h5>
          </div>
          <AnimeList animes={animes} />

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
