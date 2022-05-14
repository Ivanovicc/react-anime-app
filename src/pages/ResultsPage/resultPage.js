import { AnimeList } from "components/Lists/animesList";
import { ButtonPage } from "components/Button/buttonPage";
/* Hooks */
import { useSearchForm } from "hooks/useSearch";
import { usePageTitle } from "hooks/usePageTitle";

export const ResultsPage = ({ params }) => {
  const { key } = params;
  const { result, setPages } = useSearchForm({ key });
  usePageTitle("Resultados de busqueda");

  return (
    <>
      <main className="main-results-page container">
        <AnimeList animes={result} title={`Resultados de "${key}"`} />
        <ButtonPage nextPage={setPages} />
      </main>
    </>
  );
};
