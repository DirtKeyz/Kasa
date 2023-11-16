import "./Footer.scss";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <div className="footer">
      <div className="contenu_footer">
        <Logo nameLogo="logo_footer" colorLogo="white" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
