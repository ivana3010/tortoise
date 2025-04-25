import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Species from './pages/Species';
import Food from './pages/Food';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Shop from './pages/Shop';
import OneTortoise from './pages/OneTortoise';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FruitVeg from "./pages/FruitVeg";
import GrassFlower from "./pages/GrassFlower";
import Care from "./pages/Care";

const App = () => {
  return (
    <div className="bg-primary py-10">
      <div className="bg-primary"></div>
      <div className="bg-[#f7e4bb] mx-auto px-20 pt-4 max-w-7xl shadow-[0_0_10px_4px_rgba(10,10,10,0.6)]">
        {/* or
        <div className="bg-primary fixed top-0 left-0 w-full h-full flex items-center justify-center py-6">
        <div className="bg-[#f7e4bb] w-full max-w-7xl h-full max-h-full overflow-y-auto shadow-[0_0_10px_4px_rgba(10,10,10,0.6)] px-4 md:px-20 pt-4">*/}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/species" element={<Species />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/one-tortoise/:tortId" element={<OneTortoise />} />
          <Route path="/fruitveg" element={<FruitVeg />} />
          <Route path="/grassflower" element={<GrassFlower />} />
          <Route path="/care" element={<Care />} />
        </Routes>
        <Footer />

      </div>
    </div>
  )
}
export default App;