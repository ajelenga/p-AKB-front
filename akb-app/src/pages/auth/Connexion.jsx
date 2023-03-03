import "../../Styles/login.sass"
import Navbar from "../../components/Menu/Navbar";
import FormInput from "./FormInput";
import React, {useContext, useEffect, useState} from "react";
import Auth from "../../contexts/Auth";
import {useNavigate} from 'react-router-dom';
import {login} from "../../services/AuthApi";
import {toast} from "react-toastify";


const Connexion = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    const navigate = useNavigate();

    //const emailRef = useRef()
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const onChangeinput = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    let val = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    };
    const notifyOK = (string) => toast.success(string, val);
    const notifyKO = (string) => toast.error(string, val);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(values);
            setIsAuthenticated(response);
            navigate('/compte/acompte');
            notifyOK('Hey 👋, content de te revoir ');
        } catch ({response}) {
            notifyKO('Désolé la connexion est pas possible - ID/MDP ?');
            console.log(response);
        }

    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/compte/acompte');
        }
    });

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
                            <form className="form-login-connexion rounded overflow-hidden shadow-lg"
                                  onSubmit={handleSubmit}>
                                <div className="relative z-0 w-full mb-6 group">
                                    <FormInput placeholder="" value={values.email}
                                               onChange={onChangeinput} type="texte" name="email" id="email"
                                               errorMessage="L'email renseigné n'est pas bon. ex: elemple@example.fr' !"
                                               pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"

                                    />
                                    <label htmlFor="email"
                                           className="peer-focus:font-medium absolute text-black-500 dark:text-black
                                                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                    peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                     peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <FormInput placeholder="" value={values.password}
                                               onChange={onChangeinput} type="password" name="password" id="password"
                                               errorMessage="Le mot de passe doit comporter 8 à 20 caractères et inclure au moins une lettre, un chiffre et un caractère spécial !"
                                               pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                                    />
                                    <label htmlFor="password"
                                           className="peer-focus:font-medium absolute text-black-500 dark:text-black
                                                 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                  peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Password</label>
                                </div>
                                <br/>
                                <button type="submit"
                                        className="button-home text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
                                        focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg
                                        px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500
                                        dark:hover:bg-[#050708]/30 mr-2 mb-2 input-home w-full">Connexion
                                </button>
                                <div className="flex justify-between taille-insMdp">
                                    <div>
                                        <a href="/"><font>Mot de passe oublié ?</font></a>
                                    </div>
                                    <div>
                                        <a
                                            href="/inscription"><font>S'inscrire?</font></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )


}

export default Connexion;
