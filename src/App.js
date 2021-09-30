import './App.css';
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

const items = [
  { name: 'Dresses', label: 'Dresses' },
  { name: 'Formal', label: 'Formal' },
  { name: 'Jeans', label: 'Jeans' },
  { name: 'Skirts', label: 'Skirts' },
  { name: 'Tops', label: 'Tops' },
]

function App() {
  return (
    <div className="App">
      <Home/>
      <Nav/>
      <Footer/>
      <Sidebar items={items}/>
     
    </div>
  );
}

export default App;
