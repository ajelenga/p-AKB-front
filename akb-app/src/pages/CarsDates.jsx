import {Typography} from "@material-tailwind/react";
import React, {Fragment, useEffect, useState} from "react";
import {FcApproval} from "react-icons/fc";
import {useLocation} from "react-router";
import Navbar from "../components/Menu/Navbar";
import {AutoApiF} from "../services/AutoApi";
import "../Styles/carsDates.sass";

export default function CarsDates() {
    const [data, setData] = useState([]);
    const [ValuesCars, setValuesCars] = useState([]);

    const location = useLocation();
    const test2 = location.state;

    //console.log("test2");
    //console.log(test2.datefield1);
    //console.log(test2.datefield2);
    const callApi = () => {
        AutoApiF(test2)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                setValuesCars(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        //console.log("useEfect");
        callApi();
    }, []);

    const handleClick = (valueP) => {
        console.log('Le bouton a été cliqué !');
        console.log(valueP);
        console.log(ValuesCars);
        //navigate('/cars_reserver', {state: ValuesCars});
    };


    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="home-page-cars rounded overflow-hidden">
                            <div className="text-center">
                                <Fragment>
                                    <Typography variant="h5">
                                        Liste des véhicules disponiles à {test2.address_icon} -{" "}
                                        {test2.datefield1} au {test2.datefield2}
                                    </Typography>
                                </Fragment>
                            </div>
                            <div
                                className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                                {data.map((content) => (
                                    <div
                                        className="rounded overflow-hidden shadow-lg"
                                        key={content.idTO}
                                    >
                                        <img
                                            src={content.vehiculeTO.descriptionvclTO}
                                            alt="photo du vehicule"
                                            width="100%"
                                            height="100%"
                                        />

                                        <div className="px-6 py-4">
                      <span className="flex flex-row justify-start">
                        <span>
                          <FcApproval/>
                        </span>
                        <p className="text-gray-600 text-xs ml-1">
                          Kilométrage illimité
                        </p>
                      </span>
                                            <span className="flex flex-row justify-start">
                        <span>
                          <FcApproval/>
                        </span>
                        <p className="text-gray-600 text-xs ml-1">
                          Responsabilité civile
                        </p>
                      </span>
                                            <span class="flex flex-row justify-start">
                        <span>
                          <FcApproval/>
                        </span>
                        <p className="text-gray-600 text-xs ml-1">
                          Kilométrage illimité
                        </p>
                      </span>
                                            <span className="flex flex-row justify-start">
                        <span>
                          <FcApproval/>
                        </span>
                        <p className="text-gray-600 text-xs ml-1">
                          Annulation gratuite
                        </p>
                      </span>
                                            <hr class="h-px my-3 bg-gray-100 border-0 dark:bg-gray-300 hr-8"></hr>
                                            <span className="flex flex-row">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2">
                          {content.vehiculeTO.boitevitessevclTO}
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2">
                          Climatisation
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2">
                          4 places
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2">
                          3 portes
                        </span>
                      </span>
                                            <hr className="h-px my-3 bg-gray-100 border-0 dark:bg-gray-300 hr-8"></hr>
                                        </div>

                                        <div className="px-6 pt-4 pb-2">
                      <span className="inline-block  rounded-full  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Prix: {content.vehiculeTO.prixvclTO}€/Km
                      </span>

                                            <div className="font-bold text-xl mb-2">
                                                <button
                                                    className="button-home text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
                                        focus:outline-none focus:ring-[#24292F]/50 text-sm font-semibold rounded-lg 
                                        px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500
                                        dark:hover:bg-[#050708]/30 mr-2 mb-2  "
                                                    onClick={handleClick(content.vehiculeTO)}
                                                >
                                                    Réserver
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
