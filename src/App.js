import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import OCMenu from "./components/OffCanvasMenu";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Header />
      <OCMenu />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
