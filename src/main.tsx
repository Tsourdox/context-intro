import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./contexts/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
);
