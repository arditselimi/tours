import facebook from "../assets/icons/facebook.png";
import youtube from "../assets/icons/youtube.png";
import whatsapp from "../assets/icons/whatsapp.png";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <div className="container" id="footer">
      <nav>
        <h2 className="logo">Epic Exursions</h2>

        <ul className="navbar">
          {pageLinks.map((link) => (
            <li>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>

        <ul className="social">
          {socialLinks.map((link) => (
            <li>
              <a href={link.href}>
                <img src={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Footer;
