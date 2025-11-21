import { Routes, Route } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import MyWork from "../MyWork/MyWork";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer"; // Import the new Footer component
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
