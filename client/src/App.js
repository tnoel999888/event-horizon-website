import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import navigation from "./consts";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="page">
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
