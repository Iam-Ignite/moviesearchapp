import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/pages/Navbar";
import Pagetwo from "./component/pages/Pagetwo";
import Pageone from "./component/pages/Pageone";
import PageThree from "./component/pages/PageThree";

import { createBrowserHistory } from "history";
import Home from "./component/pages/Home";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
        <div className="nav">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Pageone />
            </Route>
            <Route path="/tv/series">
              <Pagetwo />
            </Route>
            <Route path="/latest/movies">
              <PageThree />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
