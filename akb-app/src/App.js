import React, {Fragment, useState} from "react";
import "./App.css";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import CarsDates from "./pages/CarsDates";
import Example from "./pages/Example";
import Inscription from "./pages/auth/Inscription";
import Paiement from "./pages/paiement/Paiement";
import Connexion from "./pages/auth/Connexion";
import {hasAuthenticated} from "./services/AuthApi";
import Auth from "./contexts/Auth";
import AuthenticatedRouteProfile from "./components/Menu/AuthenticatedRouteProfile";
import AuthenticatedRouteAcompte from "./components/Menu/AuthenticatedRouteAcompte";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BlogPostQuestion from "./pages/BlogPostQuestion";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
    return (
        <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <BrowserRouter>
                <Fragment>
                    <Routes>

                        <Route exact path={"/paiement"} element={<Paiement/>}/>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route exact path={"/about"} element={<About/>}/>
                        <Route exact path={"/connexion"} element={<Connexion/>}/>
                        <Route exact path={"/inscription"} element={<Inscription/>}/>
                        <Route exact path={"/cars_dates"} element={<CarsDates/>}/>
                        <Route exact path={"/questions"} element={<BlogPostQuestion/>}/>
                        <Route exact path={"/alph"} element={<Example/>}/>
                        <Route exact path={"*"} element={<Home/>}/>
                        <Route
                            path="/compte/acompte"
                            element={<AuthenticatedRouteAcompte/>}
                        />
                        <Route path="/profile" element={<AuthenticatedRouteProfile/>}/>
                    </Routes>
                </Fragment>
            </BrowserRouter>
            <ToastContainer/>
        </Auth.Provider>
    );
}

export default App;
