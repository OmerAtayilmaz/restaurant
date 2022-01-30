import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import NavbarDetail from "./components/NavbarDetail";
import Main from "./components/Main";
import "./index.css";

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Navbar />
      <NavbarDetail />
      <Main />
    </div>
  );
}

export default App;
