import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react"; // 👈 Import HeroUI provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      {" "}
      {/* 👈 Wrap App with HeroUIProvider */}
      <App />
    </HeroUIProvider>
  </StrictMode>
);
