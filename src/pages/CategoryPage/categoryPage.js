/* Components */
import { CategoryList } from "components/CategoryList/categoryList";
import { ListPreview } from "components/Lists/listPreview";
import { SkeletonLoading } from "components/Loading/skeletonLoading";
/* Hooks */
import { useCategory } from "hooks/Animes/useCategory";
import { useParentCategory } from "hooks/Animes/useListCategories";
import { usePageTitle } from "hooks/usePageTitle";

export const CategoryPage = ({ params }) => {
  const { id } = params;
  const { categoryPopular, categoryEmision, loading } = useCategory({ id });
  const { categoryRelated, loadingCategories } = useParentCategory({ id });

  usePageTitle(!id ? "Cargando..." : `Animes sobre ${id}`);

  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <main className="main-category row">
          <div className="main-col col-anime">
            <div className="main-body container">
              <ListPreview
                toPage={`/category/in-emision/${id}`}
                animes={categoryEmision.animes}
                title={`Animes sobre ${id} en emision`}
              />
            </div>
            <div className="main-body container">
              <ListPreview
                toPage={`/category/most-popular/${id}`}
                animes={categoryPopular.animes}
                title={`Animes sobre ${id} más populares`}
              />
            </div>
          </div>
          <div className="main-col col-category">
            {loadingCategories ? (
              <SkeletonLoading />
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
