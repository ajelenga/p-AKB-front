import React, {Component} from 'react';
import Navbar from "../../Component/Menu/Navbar";
import "../../Styles/inscripion.sass"

class Inscription extends Component {
    render() {
        return (
            <section className="home_LOGIN">
                <Navbar/>
                <div className="homepage">
                    <div className="search_hero">
                        <div className="container search_hero__content_login">
                            <div className="home-page">
                                <div className="flex justify-center">
                                    <img className="img-taille2" src="/img/AKB_menu.png" alt="bug"/>
                                </div>
                                <form className="form-login-inscription rounded overflow-hidden shadow-lg">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="texte" name="floating_pseudo" id="floating_pseudo"
                                               className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer" placeholder=" " required/>
                                        <label htmlFor="floating_pseudo"
                                               className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pseudo
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="password" name="floating_password" id="floating_password"
                                               className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="floating_password"
                                               className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mot
                                            de passe</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="password" name="repeat_password" id="floating_repeat_password"
                                               className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer"
                                               placeholder=" " required/>
                                        <label htmlFor="floating_repeat_password"
                                               className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmer
                                            Mot de passe</label>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="floating_first_name" id="floating_first_name"
                                                   className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer"
                                                   placeholder=" " required/>
                                            <label htmlFor="floating_first_name"
                                                   className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="floating_last_name" id="floating_last_name"
                                                   className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer"
                                                   placeholder=" " required/>
                                            <label htmlFor="floating_last_name"
                                                   className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Prénom</label>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="date" name="floating_company" id="floating_company"
                                                   className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer"
                                                   placeholder=" " required/>
                                            <label htmlFor="floating_company"
                                                   className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date de naissance</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                                border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                                dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                                focus:border-gray-600 peer"
                                                id="file_input" type="file"/>
                                            <label className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                    peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                htmlFor="file_input">Photo de profil</label>

                                        </div>
                                        
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone"
                                                   id="floating_phone"
                                                   className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer"
                                                   placeholder=" " required/>
                                            <label htmlFor="floating_phone"
                                                   className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tel
                                                number (+337 77 77 77 77)</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input type="text" name="floating_company" id="floating_company"
                                                   className="input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                                               border-0 border-b-2 border-gray-300 appearance-none dark:text-black
                                               dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0
                                               focus:border-gray-600 peer"
                                                   placeholder=" " required/>
                                            <label htmlFor="floating_company"
                                                   className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company
                                                (Ex. Google)</label>
                                        </div>
                                    </div>
                                    
                                    <br/>
                                    <button type="button"
                                            className="button-home text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
                                        focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg
                                        px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500
                                        dark:hover:bg-[#050708]/30 mr-2 mb-2 input-home w-full">S'inscrire
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Inscription;