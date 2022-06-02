/* Components */
import { AnimeList } from "components/Lists/animesList";
import { Loading } from "components/Loading/loadingPage";
import { PaginationList } from "components/Pagination/paginationList";
/* Hooks */
import { usePopularPreviews } from "hooks/Animes/usePreviews";
import { usePageTitle } from "hooks/usePageTitle";
/* Styles */
import "./sortPage.css";

export const MostPopular = () => {
  const { loading, pageCount, popular, setPageOffset, pageOffset } =
    usePopularPreviews({ limit: 18 });

  usePageTitle("Animes populares");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-popular container">
          <AnimeList animes={popular.animes} title="Animes más populares" />
          <div className="pag-container">
            <PaginationList
              count={pageCount}
              offset={pageOffset}
              setPageOffset={setPageOffset}
            />
          </div>
        </main>
      )}
    </>
  );
};
