import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
//import "./index.css";
                                                                         
// Dynamic basename: Production par '/new-site-1' rahega, local par '' rahega
const basename = import.meta.env.MODE === "production" ? "/new-site-1" : "";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
=======
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
>>>>>>> b516c4b8c0c0c445a16a44db1025ad773606f0c0
  </StrictMode>
);