import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Header, Footer, Home, Music, Contact, News,
} from "./components";

const navigation = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/news/",
    component: News,
  },
  {
    path: "/music/",
    component: Music,
  },
  {
    path: "/contact/",
    component: Contact,
  },
];

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="page">
          {navigation.map((nav) => <Route exact path={nav.path} component={nav.component} />)}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
