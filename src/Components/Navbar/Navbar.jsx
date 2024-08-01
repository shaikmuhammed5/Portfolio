/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = ({ themeChange, theme }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="nav">
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h4 className="logo">Shaik Muhammed</h4>

          <div className="btn-theme">
            <ul>
              <li>
                <a className="menu-item" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="menu-item" href="#skill">
                  Skill
                </a>
              </li>
              <li>
                <a className="menu-item" href="#project">
                  Project
                </a>
              </li>
              <li>
                <a className="menu-item" href="#contact">
                  Contact Me
                </a>
              </li>
              <button className="contact-btn" onClick={() => {}}>
                Hire Me
              </button>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
              <span className="material-symbols-outlined">
                {openMenu ? "close" : "menu"}
              </span>
            </button>

            <button
              className="material-symbols-outlined theme"
              onClick={themeChange}
            >
              {theme ? "light" : "dark"}_mode
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
