import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './assets/styles/main.scss'
import ProductCategory from "./views/productCategories";
function App() {
  
  return (
    <div className="w-full flex flex-col overflow-hidden" style={{scrollbarWidth:'none'}}>
      <Navbar />
      <div className="w-full flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-category" element={<ProductCategory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
