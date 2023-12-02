import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import  Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Guide from "./components/Guide";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>
    </div>
  );
}

export default App;
