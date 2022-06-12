/* Components */
import { AnimeList } from "components/Lists/animesList";
import { Loading } from "components/Loading/loadingPage";
import { PaginationList } from "components/Pagination/paginationList";
/* Hooks */
import { useRecentCategoryPagination } from "hooks/Animes/useCategoryPagination";
import { usePageTitle } from "hooks/usePageTitle";

export const CategoryRecents = ({ params }) => {
  const { id } = params;
  const { loadingPage, page, pageCount, result, setPage } =
    useRecentCategoryPagination({
      id,
    });

  usePageTitle(!id ? "Cargando..." : `Animes sobre ${id} recientes`);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <main className="main-category row container">
          <div className="section-title">
            <h5>{`Animes sobre ${id} recientes`}</h5>
          </div>
          <AnimeList animes={result.animes} />
          <PaginationList
            count={pageCount}
            offset={page}
            setPageOffset={setPage}
          />
        </main>
      )}
    </>
  );
};
