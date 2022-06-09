/* Components */
import { CategoryList } from "components/CategoryList/categoryList";
import { ListPreview } from "components/Lists/listPreview";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { usePageTitle } from "hooks/usePageTitle";
import { useAnimes } from "hooks/Animes/useAnimes";
import { useListCategories } from "hooks/Animes/useListCategories";
/* Styles */
import "./home.css";

export const HomePage = () => {
  const { listCategories } = useListCategories();
  const { state, loading } = useAnimes();
  const { popularAnime, topRatedAnime, inEmisionAnime } = state;

  usePageTitle("Inicio");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-home row container">
          <div className="main-col col-anime">
            <ListPreview
              toPage="/anime/popular-emision"
              animes={inEmisionAnime.slice(0, 5)}
              title="Animes más populares en emisión"
            />
            <ListPreview
              toPage="/anime/most-popular"
              animes={popularAnime.slice(0, 5)}
              title="Animes más populares"
            />
            <ListPreview
              toPage="/anime/top-rated"
              animes={topRatedAnime.slice(0, 5)}
              title="Animes mejor evaluados"
            />
          </div>
          <div className="main-col col-category">
            <CategoryList list={listCategories} title="Categorías" />
          </div>
        </main>
      )}
    </>
  );
};
