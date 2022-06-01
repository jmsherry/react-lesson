import { Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { getInvoices } from "./data";
import ToggleDisplay from "./components/ToggleDisplay";


function App() {
  let invoices = getInvoices();
  return (
    <div className="App">
      <Header />
      <ToggleDisplay />
    </div>
  );
}

export default App;
