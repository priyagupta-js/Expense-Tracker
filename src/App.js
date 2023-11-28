import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Introduction  from "./components/Introduction";
import  Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/pricing" element={<Pricing />} />

    </Routes>
    </div>
  );
}

export default App;
