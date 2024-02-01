import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f2f0a3]">
        <Navbar />
        <Hero />
      </div>
      <Reservation />
    </BrowserRouter>
  );
}

export default App;
