import './header.css';
import logo from '../../assets/logo-white.png';
import Navigation from './Navigation'

function Header() {
  return (
    <div className="header">
      <a href="/"><img width="20%" alt="Event Horizon logo" src={logo} /></a>
      <Navigation />
    </div>
  );
}

export default Header;
