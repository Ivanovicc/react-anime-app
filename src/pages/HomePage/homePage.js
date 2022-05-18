/* Components */
import { CategoryList } from "components/CategoryList/categoryList";
import { ListPreview } from "components/Lists/listPreview";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { usePageTitle } from "hooks/usePageTitle";
import { usePreviews } from "hooks/Animes/usePreviews";
import { useListCategories } from "hooks/Animes/useListCategories";
/* Styles */
import "./home.css";

export const HomePage = () => {
  const { inEmision, popular, rating, loading } = usePreviews();
  const { listCategories } = useListCategories();
  usePageTitle("Inicio");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-home row">
          <div className="main-col col-anime">
            <div className="main-body container">
              <ListPreview
                animes={inEmision}
                title="Animes más populares en emision"
              />
            </div>
            <div className="main-body container">
              <ListPreview animes={popular} title="Animes más populares" />
            </div>
            <div className="main-body container">
              <ListPreview animes={rating} title="Animes mejor evaluados" />
            </div>
          </div>
          <div className="main-col col-category">
            <CategoryList list={listCategories} title="Categorias" />
          </div>
        </main>
      )}
    </>
  );
};
