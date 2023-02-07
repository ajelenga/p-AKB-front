import React from "react";
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Inscription from "./pages/auth/Inscription";
import MiseEnLocation from "./pages/compte/MiseEnLocation";
import LocationV from "./pages/compte/LocationV";
import Formlogin from "./pages/auth/Formlogin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/auth/login"} element={<Login/>}/>
                <Route path={"/auth/inscription"} element={<Inscription/>}/>
                <Route path={"/compte/locationV"} element={<LocationV/>}/>
                <Route path={"/compte/miseEnLocation"} element={<MiseEnLocation/>}/>
                <Route path={"/form"} element={<Formlogin/>}/>
                <Route path={"*"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
