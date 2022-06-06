/* Components */
import { CategoryList } from "components/CategoryList/categoryList";
import { ListPreview } from "components/Lists/listPreview";
import { SkeletonLoading } from "components/Loading/skeletonLoading";
/* Hooks */
import { useCategory } from "hooks/Animes/useCategory";
import { useParentCategory } from "hooks/Animes/useListCategories";
import { usePageTitle } from "hooks/usePageTitle";
/* Styles */
import "./categoryPage.css";

export const CategoryPage = ({ params }) => {
  const { id } = params;
  const { categoryPopular, categoryEmision, loading, parentId } = useCategory({
    id,
  });
  const { categoryRelated, loadingCategories } = useParentCategory({
    parentId,
  });

  usePageTitle(!id ? "Cargando..." : `Animes sobre ${id}`);

  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <main className="main-category row container">
          <div className="main-col col-anime">
            <div className="media-category">
              <div className="media-body">
                <h3>Animes sobre {id}</h3>
                <p>{parentId.info}</p>
              </div>
            </div>
            <ListPreview
              toPage={`/category/in-emision/${id}`}
              animes={categoryEmision.animes}
              title={`Animes sobre ${id} recientes`}
            />
            <ListPreview
              toPage={`/category/most-popular/${id}`}
              animes={categoryPopular.animes}
              title={`Animes sobre ${id} más populares`}
            />
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
