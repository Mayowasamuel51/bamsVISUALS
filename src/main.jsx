import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import HoneyBookWidget from "./HoneyBook.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <HoneyBookWidget>
        <App />
      </HoneyBookWidget>
    </ParallaxProvider>
  </React.StrictMode>
);
