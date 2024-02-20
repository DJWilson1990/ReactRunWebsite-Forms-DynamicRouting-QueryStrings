import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/Components/Nav/NavBar";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";
import Footer from "./assets/Components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
