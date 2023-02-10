import React, {Fragment} from 'react';
import Navbar from "../components/Menu/Navbar";
import "../Styles/carsDates.sass"
import {Typography} from "@material-tailwind/react";
import {CarsDatesDetails} from "./CarsDatesDetails";

const CarsDates = (props) => {
    console.log(props)
    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="home-page-cars rounded overflow-hidden">
                            <div className="text-center">
                                <Fragment>
                                    <Typography variant="h5">Liste des véhicules disponiles la date du $*</Typography>
                                </Fragment>
                            </div>
                            <CarsDatesDetails/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CarsDates;