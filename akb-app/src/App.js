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
import AuthenticatedRouteLocation from "./components/Menu/AuthenticatedRouteLocation";
import AuthenticatedRouteMiseEnLocation from "./components/Menu/AuthenticatedRouteMiseEnLocation";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
    return (
        <Auth.Provider value={{isAuthenticated}}>
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
                            element={<AuthenticatedRouteLocation/>}
                        />
                        <Route path="/profile" element={<AuthenticatedRouteProfile/>}/>
                        <Route path="/profile" element={<AuthenticatedRouteMiseEnLocation
                        />}/>
                    </Routes>
                </Fragment>
            </BrowserRouter>
        </Auth.Provider>
    );
}

export default App;
