import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import Auth from "../../contexts/Auth";
import LocationV from "../../pages/compte/LocationV";

const AuthenticatedRouteLocation = () => {
    const {isAuthenticated} = useContext(Auth);
    return isAuthenticated ? (
        <LocationV/>
    ) : (
        <Navigate to="/connexion"/>
    )
}

export default AuthenticatedRouteLocation;
