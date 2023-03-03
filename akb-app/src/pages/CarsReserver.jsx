import React, {useEffect, useState } from "react";
import Navbar from "../components/Menu/Navbar";
import { useLocation } from "react-router";
import "../Styles/carsDates.sass";

const CarsReserver = () => {
    const location = useLocation();
    const valueLocation = location.state;
    
    const callApi = () => {
        console.log("coucou");
        console.log(valueLocation);
      };
    useEffect(() => {
        //console.log("useEfect");
        callApi();
      }, []);
    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="home-page-cars rounded overflow-hidden">
                            page de réservation


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarsReserver;
