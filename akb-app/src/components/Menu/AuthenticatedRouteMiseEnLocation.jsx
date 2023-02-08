import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import Auth from "../../contexts/Auth";
import MiseEnLocation from "../../pages/compte/MiseEnLocation";

const AuthenticatedRouteLocation = () => {
    const {isAuthenticated} = useContext(Auth);
    return isAuthenticated ? (
        <MiseEnLocation/>
    ) : (
        <Navigate to="/connexion"/>
    )
}

export default AuthenticatedRouteLocation;
