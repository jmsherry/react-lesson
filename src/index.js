import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

// Contexts
import { MenuProvider } from "./contexts/menu.context";
import { PersonProvider } from "./contexts/person.context";

// Pages
import AddPeople from "./pages/AddPeople";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <MenuProvider>
          <PersonProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="people/add" element={<AddPeople />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="invoices/:number" element={<Invoice />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PersonProvider>
        </MenuProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
