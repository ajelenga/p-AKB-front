import React from 'react';
import Navbar from "../components/Menu/Navbar";

const AllAuto = (props) => {
    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="home-page">
                            <div className="flex justify-center">
                                Les Véhicules disponibles pour cette date
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AllAuto;