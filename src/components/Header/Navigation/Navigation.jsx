import './navigation.css';
import { Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <Link to={`/news/`}>News</Link>
      <Link to={`/events/`}>Events</Link>
      <Link to={`/music/`}>Music</Link>
      <Link to={`/contact/`}>Contact</Link>
    </div>
  );
}

export default Navigation;
