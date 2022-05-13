import { ListPreview } from "components/Lists/listPreview";
import { useCategory } from "hooks/useCategory";
import { usePageTitle } from "hooks/usePageTitle";

export const CategoryPage = ({ params }) => {
  const { id } = params;
  const { categoryPopular, categoryEmision } = useCategory({ id });
  usePageTitle(!id ? "Cargando..." : `Animes de ${id}`);

  return (
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
  );
};
