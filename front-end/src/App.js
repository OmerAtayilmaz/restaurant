import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import "./index.css";
import NavbarDetail from "./components/NavbarDetail";
function App() {
  return (
    <div className="App">
      <TopBanner />
      <Navbar />
      <NavbarDetail />
    </div>
  );
}

export default App;
