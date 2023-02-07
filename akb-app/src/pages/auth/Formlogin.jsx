import "../../Styles/login.sass"
import Navbar from "../../Component/Menu/Navbar";
import FormInput from "./FormInput";
import {useState} from "react";

const Formlogin = () => {
    //const pseudoRef = useRef()
    const [values, setValues] = useState({
        pseudo: "",
        password: ""
    })
    const onChangeinput = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }


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
                                  onSubmit={handleSubmit}
                            >
                                <div className="relative z-0 w-full mb-6 group">
                                    <FormInput placeholder="" value={values.pseudo}
                                               onChange={onChangeinput} type="texte" name="pseudo" id="pseudo"
                                               errorMessage="Le pseudo doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !"
                                               pattern="^[A-Za-z0-9]{3,16}$"

                                    />
                                    <label htmlFor="pseudo"
                                           className="peer-focus:font-medium absolute text-black-500 dark:text-black
                                                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                    peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                     peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pseudo
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
                                            href="/auth/inscription"><font>S'inscrire?</font></a>
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

export default Formlogin;
