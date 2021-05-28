import './App.css';
import { Header, Footer } from './components';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Route exact path="/" render={() => (
          <h1>Home</h1>
        )}/>
        <Route exact path="/news/" render={() => (
          <h1>News</h1>
        )}/>
        <Route exact path="/events/" render={() => (
          <h1>Events</h1>
        )}/>
        <Route exact path="/music/" render={() => (
          <h1>Music</h1>
        )}/>
        <Route exact path="/contact/" render={() => (
          <h1>Contact</h1>
        )}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
