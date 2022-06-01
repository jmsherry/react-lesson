import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Contexts
import { MenuProvider } from "./contexts/menu.context";

// Pages
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Invoice from "./pages/Invoice";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <MenuProvider>
        <Routes>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/invoices/:number" element={<Invoice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MenuProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
