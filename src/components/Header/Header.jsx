import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <Logo nameLogo="logo_header" colorLogo="#ff6060" />
      <ul>
        <NavLink to="/">
          <li className="liens">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="liens">A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
