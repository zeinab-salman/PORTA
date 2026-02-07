
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from './Components/NavBar/NavBar';
function App() {


  return (

    <>
     <NavBar/>
    <Routes>
     
            <Route path="/" element={<Home />} />
           
          
          </Routes>
    </>
  )
}

export default App
