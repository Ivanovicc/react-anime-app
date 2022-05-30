/* Components */
import { CategoryList } from "components/CategoryList/categoryList";
import { ListPreview } from "components/Lists/listPreview";
import { SkeletonLoading } from "components/Loading/skeletonLoading";
/* Hooks */
import { usePageTitle } from "hooks/usePageTitle";
import { useAnimes } from "hooks/useAnimes";
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
        <SkeletonLoading />
      ) : (
        <main className="main-home row">
          <div className="main-col col-anime">
            <ListPreview
              toPage="/anime/popular-emision"
              animes={inEmisionAnime.slice(0, 5)}
              title="Animes más populares en emision"
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
            <CategoryList list={listCategories} title="Categorias" />
          </div>
        </main>
      )}
    </>
  );
};


