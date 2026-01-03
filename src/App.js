import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Projects from "./containers/Projects";
import About from "./containers/About";
import Contact from "./containers/Contact";

import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
