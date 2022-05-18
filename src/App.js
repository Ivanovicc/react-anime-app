import { Switch, Route } from "wouter";
/* Styles */
import "./App.css";
/* Components */
import { NavBar } from "components/Navbar/navbar";
/* Pages */
import { HomePage } from "pages/HomePage/homePage";
import { MangaHomePage } from "pages/MangaHomePage/mangaHome";
import { ResultsPage } from "pages/ResultsPage/resultPage";
import { DetailPage } from "pages/DetailPage/detailPage";
import { CategoryPage } from "pages/CategoryPage/categoryPage";

export const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <div className="container global-container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mangas" component={MangaHomePage} />
          <Route exact path="/anime_details/:slug" component={DetailPage} />
          <Route exact path="/anime/category/:id" component={CategoryPage} />
          <Route exact path="/search_results/:key" component={ResultsPage} />
        </div>
      </Switch>
    </>
  );
};
