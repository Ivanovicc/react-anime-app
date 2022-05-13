import { ListPreview } from "components/Lists/listPreview";
import { usePageTitle } from "hooks/usePageTitle";
import { usePreviews } from "hooks/usePreviews";
/* Styles */
import "./home.css";

export const HomePage = () => {
  const { inEmision, popular, rating } = usePreviews();
  usePageTitle("Home");

  return (
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
  );
};
