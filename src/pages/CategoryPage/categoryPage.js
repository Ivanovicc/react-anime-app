import { CategoryList } from "components/CategoryList/categoryList";
import { ListPreview } from "components/Lists/listPreview";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { useCategory } from "hooks/Animes/useCategory";
import { useParentCategory } from "hooks/Animes/useListCategories";
import { usePageTitle } from "hooks/usePageTitle";

export const CategoryPage = ({ params }) => {
  const { id } = params;
  const { categoryPopular, categoryEmision, loading } = useCategory({ id });
  const { categoryRelated, loadingCategories } = useParentCategory({ id });

  usePageTitle(!id ? "Cargando..." : `Animes de ${id}`);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-category row">
          <div className="main-col col-anime">
            <div className="main-body container">
              <ListPreview
                animes={categoryEmision}
                title={`Anime sobre ${id} en emision`}
              />
            </div>
            <div className="main-body container">
              <ListPreview
                animes={categoryPopular}
                title={`Anime sobre ${id} más populares`}
              />
            </div>
          </div>
          <div className="main-col col-category">
            {loading ? (
              <Loading />
            ) : (
              <CategoryList
                list={categoryRelated}
                title="Categorias relacionadas"
              />
            )}
          </div>
        </main>
      )}
    </>
  );
};
