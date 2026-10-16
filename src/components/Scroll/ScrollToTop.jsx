import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
<<<<<<< HEAD
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
=======
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
