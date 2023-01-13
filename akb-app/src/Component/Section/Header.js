import React, {useEffect} from 'react';
import "../../Styles/header.css"
import Navbar from "../Menu/Navbar";
import {AiTwotoneCalendar, AiTwotoneEnvironment} from "react-icons/ai";

function Header() {
    useEffect(() => {
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
                            <form className="form-class">
                                <div className="child-1">
                                    <input className="addresse style-input"
                                           placeholder="Adresse précise, gare, métro..."/>
                                    <div className="position-icon-position">
                                        <AiTwotoneEnvironment/>
                                    </div>
                                </div>
                                <div className="child-2">
                                    <input id="datefield" type='date' min={today}
                                           className="date-debut style-input"/>
                                    <div className="position-icon-calendar1">
                                        <AiTwotoneCalendar/>
                                    </div>
                                    <input id="datefield" type='date' min={today} className="date-fin style-input"/>
                                    <div className="position-icon-calendar2">
                                        <AiTwotoneCalendar/>
                                    </div>
                                </div>
                                <div className=" search_form__action">
                                    <button className="btn style-input-btn">Rechercher</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;