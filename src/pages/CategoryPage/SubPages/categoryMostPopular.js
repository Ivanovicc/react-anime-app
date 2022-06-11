/* Components */
import { AnimeList } from "components/Lists/animesList";
import { Loading } from "components/Loading/loadingPage";
import { PaginationList } from "components/Pagination/paginationList";
/* Hooks */
import { usePopularCategoryPagination } from "hooks/Animes/useCategoryPagination";
import { usePageTitle } from "hooks/usePageTitle";

export const CategoryMostPopular = ({ params }) => {
  const { id } = params;
  const { loadingPage, page, pageCount, result, setPage } =
    usePopularCategoryPagination({
      id,
    });

  usePageTitle(!id ? "Cargando..." : `Animes sobre ${id}  más populares`);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <main className="main-popular container">
          <div className="section-title">
            <h5>{`Animes sobre ${id} más populares`}</h5>
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
