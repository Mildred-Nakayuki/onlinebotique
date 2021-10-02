import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Data from "./Library/stock";

const items = [
  { name: "Dresses", label: "Dresses" },
  { name: "Formal", label: "Formal" },
  { name: "Jeans", label: "Jeans" },
  { name: "Skirts", label: "Skirts" },
  { name: "Tops", label: "Tops" },
];

function App() {
  const [data, setData] = useState(Data);
  const [checked, setChecked] = useState(false)

  const filterData = (data, category) => {
    const filtered = data.filter((dt) => data.category === category);
    setData(filtered);
  };

  const filter = () => {
    setChecked(!checked)
  }

  return (
    <div className="App">
      <div className="main-banner inner" id="home">
        <Nav />
      </div>
      <main>
        <section className="ab-info-main py-md-5 py-4">
          <div className="container py-md-3">
            <Home data={data} onFilter={filter} checked={checked} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
