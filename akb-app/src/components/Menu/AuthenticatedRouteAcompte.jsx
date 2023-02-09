import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import Auth from "../../contexts/Auth";
import Acompte from "../../pages/compte/Acompte";

const AuthenticatedRouteAcompte = () => {
    const {isAuthenticated} = useContext(Auth);
    return isAuthenticated ? (
        <Acompte/>
    ) : (
        <Navigate to="/connexion"/>
    )
}

export default AuthenticatedRouteAcompte;
