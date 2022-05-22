/* Components */
import { CategoryList } from "components/CategoryList/categoryList";
import { ListPreview } from "components/Lists/listPreview";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { usePageTitle } from "hooks/usePageTitle";
import {
  useEmisionPreviews,
  usePopularPreviews,
  useRatingPreviews,
} from "hooks/Animes/usePreviews";
import { useListCategories } from "hooks/Animes/useListCategories";
/* Styles */
import "./home.css";

export const HomePage = () => {
  const limit = 5;
  const { inEmision, loading } = useEmisionPreviews({ limit });
  const { popular } = usePopularPreviews({ limit });
  const { rating } = useRatingPreviews({ limit });
  const { listCategories } = useListCategories();

  usePageTitle("Inicio");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-home row">
          <div className="main-col col-anime">
            <ListPreview
              toPage="/anime/popular-emision"
              animes={inEmision.animes}
              title="Animes más populares en emision"
            />
            <ListPreview
              toPage="/anime/most-popular"
              animes={popular.animes}
              title="Animes más populares"
            />
            <ListPreview
              toPage="/anime/top-rated"
              animes={rating.animes}
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
