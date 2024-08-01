/* eslint-disable react/prop-types */
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <h4 className="logo">Shaik Muhammed</h4>

        <ul>
        <li>
              <a className="menu-item" href="#hero">Home</a>
            </li>
            <li>
              <a className="menu-item" href="#skill">Skill</a>
            </li>
            <li>
              <a className="menu-item" href="#project">Project</a>
            </li>
            <li>
              <a className="menu-item" href="#contact">Contact Me</a>
            </li>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
