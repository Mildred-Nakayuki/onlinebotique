import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";


function App() {
  const { data } = useAppContext();
  return (
    <div className="App">
      <div className="main-banner inner" id="home">
        <Nav />
      </div>
      <main>
        <section className="ab-info-main py-md-5 py-4">
          <div className="container py-md-3">
            <Home data={data}  />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
