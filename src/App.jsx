import React from "react";
import { useState } from "react";
import "./assets/style.css";

// Heroui
// import { Button, ButtonGroup, Input } from "@heroui/react";
import { HeroUIProvider } from "@heroui/react";

import "./assets/style.css";
// Components
import BreadHeader from "./Bread_Header";
import BreadFooter from "./Bread_Footer";

// Pages
// scroll
import ScrollToTop from "./scrolltoTop";

import Home from "./Home";
import Products from "./Products"; // ✅ Route

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";

function App() {
  const [dropCount, setDropCount] = useState(0);

  const handleAddClick = () => {
    if (dropCount >= 2) return;

    const breadId = dropCount === 0 ? "breadDrop1" : "breadDrop2";
    const bread = document.getElementById(breadId);

    if (bread && !bread.classList.contains("drop")) {
      bread.classList.add("drop");
      setDropCount((prev) => prev + 1);
    }
  };
  return (
    <HeroUIProvider>
      <Router basename="/BreadShop-F/">
        <ScrollToTop />
        <BreadHeader />
        <Routes>
          <Route path="/" element={<Home onAdd={handleAddClick} />} />
          <Route
            path="/Products"
            element={<Products onAdd={handleAddClick} />}
          />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BreadFooter />
      </Router>
    </HeroUIProvider>
  );
}

export default App;
