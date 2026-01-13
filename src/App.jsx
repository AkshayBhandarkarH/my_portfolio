import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Academics from "./Components/Academics";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>

        <Route path="/Academics" element={<Academics />}></Route>

        <Route path="/Experience" element={<Experience />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
