import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Pages/Register/AuthProvider.jsx";
import { StoreData } from "./Components/Data/StoreData.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreData>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    </StoreData>
  </StrictMode>,
);
