import { Switch, Route } from "wouter";
/* Styles */
import "./App.css";
/* Components */
import { NavBar } from "components/Navbar/navbar";
import { Footer } from "components/Footer/footer";
/* Pages */
import { HomePage } from "pages/HomePage/homePage";
import { ResultsPage } from "pages/ResultsPage/resultPage";
import { DetailPage } from "pages/DetailPage/detailPage";
import { CategoryPage } from "pages/CategoryPage/categoryPage";
import { PopularInEmision } from "pages/SortPage/popularEmision";
import { MostPopular } from "pages/SortPage/mostPopular";
import { TopRated } from "pages/SortPage/topRated";
import { AnimeContextProvider } from "store/animeContext";

export const App = () => {
  return (
    <AnimeContextProvider>
      <NavBar />
      <Switch>
        <div className="container global-container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:content/details/:slug" component={DetailPage} />
          <Route
            exact
            path="/anime/popular-emision"
            component={PopularInEmision}
          />
          <Route exact path="/anime/most-popular" component={MostPopular} />
          <Route exact path="/anime/top-rated" component={TopRated} />
          <Route exact path="/category/:id" component={CategoryPage} />
          <Route exact path="/search_results/:key" component={ResultsPage} />
        </div>
      </Switch>
      <Footer />
    </AnimeContextProvider>
  );
};
