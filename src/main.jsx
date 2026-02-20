import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Pages/Register/AuthProvider.jsx";
import { PortfolioProvider } from "./Pages/EditPortfolio/PortfolioProvider.jsx";
import { StoreData } from "./Components/Data/StoreData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StoreData>
        <AuthProvider>
          <PortfolioProvider>
            <App />
          </PortfolioProvider>
        </AuthProvider>
      </StoreData>
    </BrowserRouter>
  </StrictMode>,
);
