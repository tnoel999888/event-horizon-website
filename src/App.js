import './App.css';
import { Header, Footer, Home, Music, Contact, News } from './components';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/news/" component={News} />
        <Route exact path="/music/" component={Music} />
        <Route exact path="/contact/" component={Contact} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
