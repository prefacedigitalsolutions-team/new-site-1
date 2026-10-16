import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Browser ko previous scroll position restore karne se roko
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Page ko top par le jao
    window.scrollTo(0, 0);
  }, [pathname]);

  // Refresh/load hone ke baad bhi top par
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("load", handleLoad);

    // Initial load par
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return null;
}

export default ScrollToTop; 