import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import Profile from "../../pages/compte/Profile";
import Auth from "../../contexts/Auth";

const AuthenticatedRouteProfile = () => {
    const {isAuthenticated} = useContext(Auth);
    return isAuthenticated ? (
        <Profile/>
    ) : (
        <Navigate to="/connexion"/>
    )
}

export default AuthenticatedRouteProfile;
