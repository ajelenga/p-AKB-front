import React from "react";
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/about"} element={<About/>} />
                <Route path={"*"} element={<About/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
