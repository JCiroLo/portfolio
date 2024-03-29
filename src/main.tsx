import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MainProvider } from "./providers";

import "./assets/css/_default.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
