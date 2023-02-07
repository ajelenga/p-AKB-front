import {Component} from "react";
import "../../Styles/login.sass"
import Navbar from "../../Component/Menu/Navbar";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            password: '',
            formErrors: {pseudo: '', password: ''},
            pseudoValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let pseudoValid = this.state.pseudoValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'pseudo':
                pseudoValid = value.match(/^[a-zA-Z]{1,20}[0-9]{0,3}$/i);
                fieldValidationErrors.pseudo = pseudoValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            pseudoValid: pseudoValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.pseudoValid && this.state.passwordValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    formErreurs(formErrors) {
        let res = "input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer form-control"
        Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                if (formErrors[fieldName].length > 0) {
                    res = "input-taille block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-red-600 peer form-control"
                }
            }
        })
        return res
    }

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
                                <form className="form-login-connexion rounded overflow-hidden shadow-lg">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <span className="formErrors">
                                           <input type="texte" name="pseudo" id="pseudo"
                                                  className={`form-group ${this.errorClass(this.state.formErrors.pseudo)}
                                                  ${this.formErreurs(this.state.formErrors)}`}
                                                  value={this.state.pseudo}
                                                  onChange={this.handleUserInput}
                                           />

                                        </span>

                                        <label htmlFor="pseudo"
                                               className="peer-focus:font-medium absolute text-black-500 dark:text-black
                                                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                    peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                     peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pseudo
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <span className="formErrors2">
                                            <input type="password" name="password" id="password"
                                                   className={`form-group ${this.errorClass(this.state.formErrors.password)}
                                                  ${this.formErreurs(this.state.formErrors)}`}
                                                   value={this.state.password}
                                                   onChange={this.handleUserInput}
                                            />
                                        </span>
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
                                        dark:hover:bg-[#050708]/30 mr-2 mb-2 input-home w-full"
                                            disabled={!this.state.formValid}>Connexion
                                    </button>
                                    <div className="flex justify-between taille-insMdp">
                                        <div>
                                            <a href="/"><font>Mot de passe oublié ddd?</font></a>
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
}

export default Login;
