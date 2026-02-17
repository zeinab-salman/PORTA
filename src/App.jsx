import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Collections from "./Pages/Collections/Collections";
import EditPortfolio from "./Pages/EditPortfolio/EditPortfolio";
import UserPortfolioComponent from "./Components/UserPortfolioComponent/UserPortfolioComponent";
function App() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/EditProfile" element={<EditPortfolio />} />
        <Route path="/Collections/:id" element={<UserPortfolioComponent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
