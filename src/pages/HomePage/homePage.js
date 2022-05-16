import { ListPreview } from "components/Lists/listPreview";
import { Loading } from "components/Loading/loadingPage";
/* Hooks */
import { usePageTitle } from "hooks/usePageTitle";
import { usePreviews } from "hooks/usePreviews";
/* Styles */
import "./home.css";

export const HomePage = () => {
  const { inEmision, popular, rating, loading } = usePreviews();
  usePageTitle("Inicio");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main-home row">
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
        </main>
      )}
    </>
  );
};
