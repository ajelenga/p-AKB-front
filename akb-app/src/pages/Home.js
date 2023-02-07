import React from 'react';
import "../Styles/home.sass"
import Navbar from "../Component/Menu/Navbar";

import $ from "jquery";
import {AiTwotoneEnvironment} from "@react-icons/all-files/ai/AiTwotoneEnvironment";

function Home() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;

    function test(e) {
        document.getElementById("datefield2").disabled = false;
        document.getElementById('datefield2').min = document.getElementById('datefield1').value;

    }

    $(function () {
        document.getElementById('datefield1').min = today;
        document.getElementById("datefield2").disabled = true;
        //document.getElementById('datefield2').min = today;
        document.querySelector("#datefield1").addEventListener("input", test);
    });


    return (
        <section className="home">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content">
                        <div className="search_hero__content__wrapper">
                            <div className="search_hero__title">
                                <div className="search_hero__title1">Louez un véhicule</div>
                                <div className="search_hero__title2">en quelques clics</div>
                            </div>
                            <p className="search_hero__subtitle">Déverrouillez-la 24h/24 avec l'appli et
                                partez&nbsp;!
                            </p>

                            <form className="form-reservation rounded overflow-hidden ">
                                <div className="relative z-0 w-full mb-6 group">
                                    <div
                                        className="absolute inset-y-0 right-8 flex items-center pl-3 pointer-events-none">
                                        <AiTwotoneEnvironment className="taille-icon"/>
                                    </div>
                                    <input type="text" id="address-icon"
                                           className=" input-home block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white-50
                                            sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600
                                             dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Adresse précise, gare, métro..."/>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <label htmlFor="datefield1"
                                               className="block mb-2  font-medium text-gray-900 dark:text-black">Date
                                            de début
                                        </label>
                                        <input type="date" id="datefield1"
                                               className="input-home block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white-50
                                            sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600
                                             dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <label htmlFor="datefield2"
                                               className="block mb-2  font-medium text-gray-900 dark:text-black">Date
                                            de fin
                                        </label>

                                        <input type="date" id="datefield2"
                                               className="input-home block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white-50
                                            sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600
                                             dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                    </div>
                                </div>


                                <button type="button"
                                        className="button-home text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
                                        focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg 
                                        px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500
                                        dark:hover:bg-[#050708]/30 mr-2 mb-2 input-home w-full">Rechercher
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;