import React, {Fragment, useState} from "react";
import "./App.css";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Inscription from "./pages/auth/Inscription";
import Paiement from "./pages/paiement/Paiement";
import Connexion from "./pages/auth/Connexion";
import {hasAuthenticated} from "./services/AuthApi";
import Auth from "./contexts/Auth";
import AuthenticatedRouteProfile from "./components/Menu/AuthenticatedRouteProfile";
import AuthenticatedRouteAccount from "./components/Menu/AuthenticatedRouteAccount";
import AuthenticatedRouteMiseEnLocation from "./components/Menu/AuthenticatedRouteMiseEnLocation";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
                        <Route exact path={"*"} element={<Home/>}/>
                        <Route
                            path="/compte/locationV"
                            element={<AuthenticatedRouteAccount/>}
                        />
                        <Route path="/profile" element={<AuthenticatedRouteProfile/>}/>
                        <Route path="/profile" element={<AuthenticatedRouteMiseEnLocation
                        />}/>
                    </Routes>
                </Fragment>
            </BrowserRouter>
            <ToastContainer/>
        </Auth.Provider>
    );
}

export default App;
