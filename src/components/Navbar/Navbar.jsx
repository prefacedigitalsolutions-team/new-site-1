import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

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

  // Jab dropdown ke kisi bhi inner link par click ho
  const handleDropdownLinkClick = () => {
    setServiceOpen(false); // Dropdown band karega (Desktop & Mobile)
    setMenuOpen(false);    // Mobile drawer band karega
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Navbar */}
      <header className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Preface Digital Logo" />
            </Link>
          </div>

          {/* Navigation */}
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

              {/* Products Mega Dropdown (Hover on Desktop, Click on Mobile) */}
              <li 
                className={`dropdown mega-dropdown ${serviceOpen ? "force-show" : ""}`}
                onMouseEnter={() => window.innerWidth > 768 && setServiceOpen(true)}
                onMouseLeave={() => window.innerWidth > 768 && setServiceOpen(false)}
              >
                <a
                  href="#"
                  className={location.pathname.startsWith("/products") ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.innerWidth <= 768) {
                      setServiceOpen((prev) => !prev);
                    }
                  }}
                >
                  Products
                  <span className="arrow">
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>

                {/* Shutter Layer */}
                <div className="dropdown-shutter-bg">
                  <div className="shutter-left"></div>
                  <div className="shutter-right"></div>
                </div>

                {/* Menu Content */}
                <div className="dropdown-menu mega-menu-content">
                  
                  <div className="mega-column">
                    <h3>Luxury Collection</h3>
                    <ul>
                      <li>
                        <Link 
                          to="/products/backpack" 
                          className={location.pathname === "/products/backpack" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Backpack Bag
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/water-bottle" 
                          className={location.pathname === "/products/water-bottle" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Water bottle
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/phone-stand" 
                          className={location.pathname === "/products/phone-stand" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Mobile phone stand
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/power-backup" 
                          className={location.pathname === "/products/power-backup" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Power back up
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/pen" 
                          className={location.pathname === "/products/pen" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Pen
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h3>Office Stationery</h3>
                    <ul>
                      <li>
                        <Link 
                          to="/products/diary" 
                          className={location.pathname === "/products/diary" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Diary
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/notebook" 
                          className={location.pathname === "/products/notebook" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Notebook
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/organisers" 
                          className={location.pathname === "/products/organisers" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Organisers
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/wall-calendar" 
                          className={location.pathname === "/products/wall-calendar" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Wall calendar
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/table-calendar" 
                          className={location.pathname === "/products/table-calendar" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Table calendar
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h3>Desk Accessories</h3>
                    <ul>
                      <li>
                        <Link 
                          to="/products/wall-clock" 
                          className={location.pathname === "/products/wall-clock" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Wall clock
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/table-clock" 
                          className={location.pathname === "/products/table-clock" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Table top clock
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/coasters" 
                          className={location.pathname === "/products/coasters" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Coaters wooden
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/mouse-pad" 
                          className={location.pathname === "/products/mouse-pad" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Mouse pad
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/earplugs" 
                          className={location.pathname === "/products/earplugs" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Earplugs
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h3>Collection</h3>
                    <ul>
                      <li>
                        <Link 
                          to="/products/pen-stand" 
                          className={location.pathname === "/products/pen-stand" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Pen stand
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/mugs" 
                          className={location.pathname === "/products/mugs" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Mugs
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/awards" 
                          className={location.pathname === "/products/awards" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Awards and trophy
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/taj-collection" 
                          className={location.pathname === "/products/taj-collection" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Wow Taj Collection
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/sustainable" 
                          className={location.pathname === "/products/sustainable" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Sustainable Collection
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h3>Corporate Brands</h3>
                    <ul>
                      <li>
                        <Link 
                          to="/products/calendar" 
                          className={location.pathname === "/products/calendar" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Calendar
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/hugo-boss" 
                          className={location.pathname === "/products/hugo-boss" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Hugo Boss
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/products/boardroom" 
                          className={location.pathname === "/products/boardroom" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Boardroom Collection
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h3>Exquisite Range</h3>
                    <ul>
                      <li>
                        <Link 
                          to="/products/premium-calendar" 
                          className={location.pathname === "/products/premium-calendar" ? "active-dropdown-link" : ""}
                          onClick={handleDropdownLinkClick}
                        >
                          Premium Calendar
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </li>

              <li>
                <Link
                  to="/Contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => {
              const newState = !menuOpen;
              setMenuOpen(newState);
              if (!newState) {
                setServiceOpen(false);
              }
            }}
            aria-label="Toggle Navigation"
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