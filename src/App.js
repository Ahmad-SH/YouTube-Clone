import "./App.css";
import Header from "./Header";
import RecommendedVids from "./RecommendedVids";
import Sidebar from "./Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Header />
        <Switch>
          <Route path="/search/:searchTerm"> 
          <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVids />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
