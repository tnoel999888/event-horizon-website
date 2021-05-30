import './App.css';
import { Header, Footer, Home, Music, Contact, News } from './components';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <div className="page">
          <Route exact path="/" component={Home} />
          <Route exact path="/news/" component={News} />
          <Route exact path="/music/" component={Music} />
          <Route exact path="/contact/" component={Contact} />
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
