import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Species from './pages/Species';
import Login from './pages/Login';
import Food from './pages/Food';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import OneTortoise from './pages/OneTortoise';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FruitVeg from "./pages/FruitVeg";
import GrassFlower from "./pages/GrassFlower";

const App = () => {
  return (
    <div className="bg-primary py-10">
      <div className="bg-primary"></div>
      <div className="bg-[#f7e4bb] mx-auto px-20 pt-4 max-w-7xl shadow-[0_0_10px_4px_rgba(10,10,10,0.6)]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/login" element={<Login />} />
          <Route path="/species" element={<Species />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/one-tortoise/:tortId" element={<OneTortoise />} />
          <Route path="/fruitveg" element={<FruitVeg />} />
          <Route path="/grassflower" element={<GrassFlower />} />
        </Routes>
        <Footer />

      </div>
    </div>
  )
}
export default App;