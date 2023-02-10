import React, {Fragment} from 'react';
import Navbar from "../components/Menu/Navbar";
import "../Styles/carsDates.sass"
import {Typography} from "@material-tailwind/react";
import {useLocation} from "react-router";

export default function CarsDates() {
    const location = useLocation();

    const test = location.state;
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
                            <div
                                className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                                {test.map(content => (

                                    <div className="rounded overflow-hidden shadow-lg" key={content.idrsv}>
                                        <img className="w-full" src="/mountain.jpg" alt="Photo voiture"/>
                                        <div className="px-6 py-4">

                                            <div className="font-bold text-xl mb-2">{content.vehicule.marquevcl}</div>
                                            <p className="text-gray-700 text-base">

                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                                                quia,
                                                Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                    <span
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Prix: {content.vehicule.prixvcl}€/Kmh</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                            <span
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                        </div>
                                    </div>
                                ))
                                }

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}