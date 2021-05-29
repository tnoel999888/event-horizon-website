import './header.css';
import Navigation from './Navigation';
import Logo from './Logo';

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
