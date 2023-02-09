import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import Auth from "../../contexts/Auth";
import Account from "../../pages/compte/Account";

const AuthenticatedRouteAccount = () => {
    const {isAuthenticated} = useContext(Auth);
    return isAuthenticated ? (
        <Account/>
    ) : (
        <Navigate to="/connexion"/>
    )
}

export default AuthenticatedRouteAccount;
