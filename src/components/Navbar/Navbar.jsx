

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
  <Link to="/">
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

    {/* Products */}
    <li className={`dropdown mega-dropdown ${serviceOpen ? "active" : ""}`}>
      <a
        href="#"
        className={location.pathname.startsWith("/products") ? "active" : ""}
        onClick={(e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            setServiceOpen((prev) => !prev);
          }
        }}
      >
        Products
        <span className="arrow">
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </a>

      <div className="dropdown-shutter-bg">
        <div className="shutter-left"></div>
        <div className="shutter-right"></div>
      </div>

      <div className="dropdown-menu mega-menu-content">

        <div className="mega-column">
          <h3>Luxury Collection</h3>
          <ul>
           <li><Link to="/products/calendar" onClick={closeMenu}>Calendar</Link>  </li>
            <li><a href="#" onClick={closeMenu}>Hugo Boss</a></li>
            <li><a href="#" onClick={closeMenu}>Boardroom Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Wow Taj Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Sustainable Collection</a></li>
          </ul>
        </div>


           <div className="mega-column">
          <h3>Luxury Collection</h3>
          <ul>
            <li><Link to="/products/calendar" onClick={closeMenu}>Calendar</Link>  </li>
            <li><a href="#" onClick={closeMenu}>Hugo Boss</a></li>
            <li><a href="#" onClick={closeMenu}>Boardroom Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Wow Taj Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Sustainable Collection</a></li>
          </ul>
        </div>



           <div className="mega-column">
          <h3>Luxury Collection</h3>
          <ul>
           <li><Link to="/products/calendar" onClick={closeMenu}>Calendar</Link>  </li>
            <li><a href="#" onClick={closeMenu}>Hugo Boss</a></li>
            <li><a href="#" onClick={closeMenu}>Boardroom Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Wow Taj Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Sustainable Collection</a></li>
          </ul>
        </div>




           <div className="mega-column">
          <h3>Luxury Collection</h3>
          <ul>
            <li><Link to="/products/calendar" onClick={closeMenu}>Calendar</Link>  </li>
            <li><a href="#" onClick={closeMenu}>Hugo Boss</a></li>
            <li><a href="#" onClick={closeMenu}>Boardroom Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Wow Taj Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Sustainable Collection</a></li>
          </ul>
        </div>


           <div className="mega-column">
          <h3>Luxury Collection</h3>
          <ul>
            <li><Link to="/products/calendar" onClick={closeMenu}>Calendar</Link>  </li>
            <li><a href="#" onClick={closeMenu}>Hugo Boss</a></li>
            <li><a href="#" onClick={closeMenu}>Boardroom Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Wow Taj Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Sustainable Collection</a></li>
          </ul>
        </div>



           <div className="mega-column">
          <h3>Luxury Collection</h3>
          <ul>
            <li><Link to="/products/calendar" onClick={closeMenu}>Calendar</Link>  </li>
            <li><a href="#" onClick={closeMenu}>Hugo Boss</a></li>
            <li><a href="#" onClick={closeMenu}>Boardroom Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Wow Taj Collection</a></li>
            <li><a href="#" onClick={closeMenu}>Sustainable Collection</a></li>
          </ul>
        </div>

        {/* Baaki columns waise hi rehne do */}

      </div>
    </li>

    <li>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
        onClick={closeMenu}
      >
        Contact
      </Link>
    </li>

  </ul>
</nav>
          {/* Mobile Toggle */}
          
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