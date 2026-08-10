import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

import "./navbar.css";
import logo from "../../assets/images/logo.png";

import { menuData } from "./menuData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
  };

  const handleDropdownLinkClick = () => {
    setMenuOpen(false);
    setServiceOpen(false);
  };

  return (
    <>
      <div
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <header className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="navbar-container">
          {/* LOGO */}

          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>

              {/* PRODUCTS */}

              <li
                className={`dropdown mega-dropdown ${
                  serviceOpen ? "force-show" : ""
                }`}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    setServiceOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 768) {
                    setServiceOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  className={
                    location.pathname.startsWith("/products")
                      ? "active dropdown-btn"
                      : "dropdown-btn"
                  }
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setServiceOpen((prev) => !prev);
                    }
                  }}
                >
                  Products
                  <i className="fa-solid fa-angle-down"></i>
                </button>

                {/* SHUTTER BACKGROUND */}

                <div className="dropdown-shutter-bg">
                  <div className="shutter-left"></div>

                  <div className="shutter-right"></div>
                </div>

                {/* MEGA MENU */}

                <div className="dropdown-menu mega-menu-content">
                  {menuData.map((menu, index) => (
                    <div className="mega-column" key={index}>
                      <h3>{menu.title}</h3>

                      <ul>
                        {menu.items.map((item) => (
                          <li key={item.name}>
                            {item.type === "hash" ? (
                              <HashLink
                                smooth
                                to={`${item.path}#${item.hash}`}
                                className={
                                  location.pathname === item.path &&
                                  location.hash === `#${item.hash}`
                                    ? "active-dropdown-link"
                                    : ""
                                }
                                onClick={handleDropdownLinkClick}
                              >
                                {item.name}
                              </HashLink>
                            ) : (
                              <Link
                                to={item.path}
                                className={
                                  location.pathname === item.path
                                    ? "active-dropdown-link"
                                    : ""
                                }
                                onClick={handleDropdownLinkClick}
                              >
                                {item.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => {
              setMenuOpen((prev) => !prev);

              if (menuOpen) {
                setServiceOpen(false);
              }
            }}
          >
            <span></span>

            <span></span>

            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
