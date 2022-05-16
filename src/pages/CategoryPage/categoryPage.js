import { ListPreview } from "components/Lists/listPreview";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { useCategory } from "hooks/useCategory";
import { usePageTitle } from "hooks/usePageTitle";

export const CategoryPage = ({ params }) => {
  const { id } = params;
  const { categoryPopular, categoryEmision, loading } = useCategory({ id });
  usePageTitle(!id ? "Cargando..." : `Animes de ${id}`);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-category">
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
        </main>
      )}
    </>
  );
};
