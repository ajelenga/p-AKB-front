import React from 'react';
import Navbar from "../Component/Menu/Navbar";

const About = () => {
    return (
        <section className="home">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content">
                        <div className="search_hero__content__wrapper">
                            <div className="search_hero__title">
                                <div className="search_hero__title1">A propos</div>
                            </div>
                            <p className="search_hero__subtitle">Déverrouillez nous&nbsp;!
                            </p>
                            Application de gestion de location d’automobile.Une entreprise qui possède un certain nombre
                            de véhicules qui les met à la disposition des utilisateurs pour une location. Cette
                            entreprise propose à des particuliers ou professionnels la possibilité de mettre en location
                            leurs véhicules, à condition que leur véhicule respecte les critères pour autoriser leur
                            location auprès de l'agence.

                            clients:
                            mettre leur bien en location - MEL
                            louer des véhicules - LV
                            gestionnaires:
                            Administrateur
                            validateur
                            - consultatio
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;