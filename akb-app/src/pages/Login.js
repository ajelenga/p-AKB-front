import React from 'react';
import Navbar from "../Component/Menu/Navbar";
import "../Styles/login.sass"
import { FaHandPointRight } from "react-icons/fa";

const Login = () => {
    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="search_hero__content__wrapper_login">
                            <div className="search_hero__title_login">
                                <img src="/img/AKB_menu.png" alt="bug" height={400}/>
                            </div>
                            <form className="form-class">
                                <div className="child-1">
                                    <input className="input-connect style-input"
                                           placeholder="Pseudo"/>
                                    <div className="position-icon-position-login">
                                    </div>
                                </div>
                                <div className="child-1">
                                    <input className="input-connect style-input"
                                           placeholder="Mot de passe"/>
                                    <div className="position-icon-position-login">
                                    </div>
                                </div>
                                <div className=" search_form__action">
                                    <button className="btn style-input-btn">Se Connecter</button>
                                </div>
                                <br/>
                                <div className={"textcenter"}>
                                    <font>Mot de passe oublié ?</font> <FaHandPointRight/> <a href="/">cliquez ici</a>
                                </div>
                                <br/>
                                <div className={"textcenter"}>
                                    <font>Tu n'as pas de compte?</font> <FaHandPointRight/> <a href="/">Inscris-toi!</a>
                                </div>


                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;