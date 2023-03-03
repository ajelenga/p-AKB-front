import React, {useEffect, useState} from "react";
import Navbar from "../components/Menu/Navbar";
import {useLocation} from "react-router";
import "../Styles/carsDates.sass";

const CarsReserver = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const valueLocation = location.state;

    const callApi = () => {
        console.log("coucou");
        console.log(valueLocation);
        setData(valueLocation)
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
                            <div className="search_hero__title">
                                <div className="search_hero__title1">Véhicule réservé</div>
                            </div>

                            <br/><br/>
                            <div>
                                <section className="dark:bg-gray-800 dark:text-gray-100 rounded overflow-hidden">
                                    {data.map(content => (

                                        <div
                                            className="container flex flex-col-reverse mx-auto lg:flex-row"
                                            key={content.idTO}>
                                            <div
                                                className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 withe:bg-gray-400 dark:text-amber-50">
                                                <div className="flex space-x-2 sm:space-x-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                    </svg>
                                                    <div className="space-y-2">
                                                        <p></p>
                                                        <p className="text-lg font-medium leading-snug">data.descriptionvclTO
                                                            sit amet</p>
                                                        <p className="leading-snug">Praesentium ea et neque distinctio
                                                            quas
                                                            eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                                                <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                                    <img src="https://source.unsplash.com/640x480/" alt=""
                                                         className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"/>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarsReserver;
