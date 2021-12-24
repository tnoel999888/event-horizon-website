import React from "react";
import { block } from "bem-cn";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import navigation from "./consts";
import "./App.scss";

const classname = block("app");

function App() {
  return (
    <Router>
      <div className={classname()}>
        <Header />
        <div className={classname("page")}>
          {navigation.map(
            (nav) => (
              <Route
                exact
                key={nav.path}
                path={nav.path}
                component={nav.component}
              />
            ),
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
