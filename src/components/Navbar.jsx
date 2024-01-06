import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <h2 className="logo">Epic Exursions</h2>

        <ul className="navbar">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>

        <ul className="social">
          {socialLinks.map((link) => (
            <li key={link.id}>
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
export default Navbar;
