import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f2f0a3]">
        <Navbar />
        <Hero />
      </div>
      <Reservation />
      <About />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
