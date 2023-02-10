import React, {useState} from 'react';
import "../Styles/home.sass"
import Navbar from "../components/Menu/Navbar";

import $ from "jquery";
import {AiTwotoneEnvironment} from "@react-icons/all-files/ai/AiTwotoneEnvironment";
import FormInputHome from "./FormInputHome";
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

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
        //document.getElementById("datefield2").disabled = true;
        //document.getElementById('datefield2').min = today;
        document.querySelector("#datefield1").addEventListener("input", test);
    });

    const [values, setValues] = useState({
        address_icon: "",
        datefield1: today,
        datefield2: today
    })
    const onChangeinput = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values)

        try {
            //const responseCars = await AutoApiFTest()
            const responseCars =
                [
                    {
                        "idrsv": 7,
                        "numeroreservationrsv": 32,
                        "datedebutlocationrsv": "2023-01-18T23:00:00.000+00:00",
                        "adressePriseVehicule": "brest",
                        "datefinlocationrsv": "2023-01-25T23:00:00.000+00:00",
                        "cautionrsv": 23.0,
                        "paiementrsv": 233.0,
                        "vehicule": {
                            "idvcl": 3,
                            "marquevcl": "aaaa",
                            "modelvcl": "aaa",
                            "serievcl": "aaaa",
                            "typemoteurvcl": "aaa",
                            "reservoirvcl": "aaaa",
                            "kmvcl": "aaa",
                            "couleurvcl": "aaa",
                            "descriptionvcl": "aaaa",
                            "boitevitessevcl": "aaaa",
                            "statutvcl": "aaa",
                            "datemiseligne": "2023-01-06T20:42:24.000+00:00",
                            "datedebutdisponibilite": "2023-02-01T20:42:24.000+00:00",
                            "datefindisponibilite": "2023-03-31T19:42:24.000+00:00",
                            "cautionvcl": 122.0,
                            "prixvcl": 23.0,
                            "compte": null
                        }
                    },
                    {
                        "idrsv": 8,
                        "numeroreservationrsv": 32,
                        "datedebutlocationrsv": "2023-01-18T23:00:00.000+00:00",
                        "adressePriseVehicule": "brest",
                        "datefinlocationrsv": "2023-01-25T23:00:00.000+00:00",
                        "cautionrsv": 23.0,
                        "paiementrsv": 233.0,
                        "vehicule": {
                            "idvcl": 3,
                            "marquevcl": "aaaa",
                            "modelvcl": "aaa",
                            "serievcl": "aaaa",
                            "typemoteurvcl": "aaa",
                            "reservoirvcl": "aaaa",
                            "kmvcl": "aaa",
                            "couleurvcl": "aaa",
                            "descriptionvcl": "aaaa",
                            "boitevitessevcl": "aaaa",
                            "statutvcl": "aaa",
                            "datemiseligne": "2023-01-06T20:42:24.000+00:00",
                            "datedebutdisponibilite": "2023-02-01T20:42:24.000+00:00",
                            "datefindisponibilite": "2023-03-31T19:42:24.000+00:00",
                            "cautionvcl": 122.0,
                            "prixvcl": 23.0,
                            "compte": null
                        }
                    }
                ]
            navigate('/cars_dates', {state: responseCars});

            //console.log(responseCars)
        } catch ({responseCars}) {
            //console.log(responseCars);
        }
    };


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

                            <form className="form-reservation rounded overflow-hidden " onSubmit={handleSubmit}>
                                <div className="relative z-0 w-full mb-6 group">
                                    <div
                                        className="absolute inset-y-0 right-8 flex items-center pl-3 pointer-events-none">
                                        <AiTwotoneEnvironment className="taille-icon"/>
                                    </div>
                                    <FormInputHome placeholder="Adresse précise, gare, métro..."
                                                   value={values.address_icon}
                                                   onChange={onChangeinput} type="text" id="address_icon"
                                                   name="address_icon"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <label htmlFor="datefield1"
                                               className="block mb-2  font-medium text-gray-900 dark:text-black">Date
                                            de début
                                        </label>
                                        <FormInputHome placeholder=""
                                                       onChange={onChangeinput} type="date" id="datefield1"
                                                       name="datefield1"
                                        />
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <label htmlFor="datefield2"
                                               className="block mb-2  font-medium text-gray-900 dark:text-black">Date
                                            de fin
                                        </label>
                                        <FormInputHome placeholder=""
                                                       onChange={onChangeinput} type="date" id="datefield2"
                                                       name="datefield2"
                                        />
                                    </div>
                                </div>


                                <button type="submit"
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