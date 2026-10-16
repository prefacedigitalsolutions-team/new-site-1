import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { HashLink } from "react-router-hash-link"; // HashLink ko wapas import karein
=======
import { HashLink } from "react-router-hash-link";
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
import { useEffect, useState } from "react";

import "./navbar.css";
import logo from "../../assets/images/logo.png";
<<<<<<< HEAD
=======

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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
<<<<<<< HEAD
=======

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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
<<<<<<< HEAD

          {/* LOGO */}
=======
          {/* LOGO */}

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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

<<<<<<< HEAD
              {/* PRODUCTS DROPDOWN */}
=======
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

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
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

<<<<<<< HEAD
                <div className="dropdown-shutter-bg">
                  <div className="shutter-left"></div>
=======
                {/* SHUTTER BACKGROUND */}

                <div className="dropdown-shutter-bg">
                  <div className="shutter-left"></div>

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
                  <div className="shutter-right"></div>
                </div>

                {/* MEGA MENU */}
<<<<<<< HEAD
=======

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
                <div className="dropdown-menu mega-menu-content">
                  {menuData.map((menu, index) => (
                    <div className="mega-column" key={index}>
                      <h3>{menu.title}</h3>

                      <ul>
<<<<<<< HEAD
                        {menu.items.map((item) => {
                          // Clean absolute path for HashLink to prevent double routing bugs
                          const cleanPath = item.path.startsWith("/")
                            ? item.path
                            : `/${item.path}`;

                          return (
                            <li key={item.name}>
                              {item.type === "hash" ? (
                                <HashLink
                                  smooth
                                  to={`${cleanPath}#${item.hash}`}
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
                                  to={cleanPath}
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
                          );
                        })}
=======
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
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
                      </ul>
                    </div>
                  ))}
                </div>
              </li>

<<<<<<< HEAD
              {/* DOWNLOAD */}
              <li>
                <Link
                  to="/download"
                  className={location.pathname === "/download" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Download Catalogue
                </Link>
              </li>

              {/* BLOG */}
              <li>
                <Link
                  to="/blog"
                  className={location.pathname === "/blog" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Blogs
                </Link>
              </li>

              {/* CONTACT */}
=======
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                  onClick={closeMenu}
                >
<<<<<<< HEAD
                  Contact us
                </Link>
              </li>

              <li className="navbar-phone">
                <a href="tel:+917827797247">+91-7827797247</a>
              </li>
            </ul>
          </nav>

=======
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* MOBILE BUTTON */}

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => {
<<<<<<< HEAD
              setMenuOpen(!menuOpen);
=======
              setMenuOpen((prev) => !prev);

>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
              if (menuOpen) {
                setServiceOpen(false);
              }
            }}
          >
            <span></span>
<<<<<<< HEAD
            <span></span>
            <span></span>
          </button>

=======

            <span></span>

            <span></span>
          </button>
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
        </div>
      </header>
    </>
  );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
