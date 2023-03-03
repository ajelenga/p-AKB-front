import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Menu/Navbar";
import "../../Styles/inscripion.sass";
import FormInputInsciption from "./FormInputInsciption";

const Inscription = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    sexe: "Madame",
    emailI: "",
    passwordI: "",
    confirmPassword: "",
    nom: "",
    prenom: "",
    dateNaissnance: "",
    telNumero: "",
    compagny: "",
    file: "",
  });
  const onChangeinput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  let val1 = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      idcpt: null,
      mailcpt: values.emailI,
      photoprofilcpt: "USE1",
      motdepassecpt: values.passwordI,
      user: {
        idusr: null,
        nomusr: values.nom,
        prenomusr: values.prenom,
        datenaissance: values.dateNaissnance,
        adresseusr: "Brest",
        codepostaleusr: "29200",
        pieceidentiteusr: "qsfqsf",
        sexeusr: values.sexe,
      },
    };
    let nomp = values.nom;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const notifyOK = (string) => toast.success(string, val1);
    const notifyKO = (string) => toast.error(string, val1);
    fetch("http://localhost:8083/inscriptionUtilisateur", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.statutTO === "Inscription utilisateur effectué") {
          navigate("/connexion");
          notifyOK("inscription: " + nomp + "effectué");
        } else {
          notifyKO(data.statutTO + "ko : " + data.commentaireTO);
        }
      });
    console.log(values);
  };
  return (
    <section className="home_LOGIN">
      <Navbar />
      <div className="homepage">
        <div className="search_hero">
          <div className="container search_hero__content_login">
            <div className="home-page">
              <div className="flex justify-center">
                <img
                  className="img-taille2"
                  src="/img/AKB_menu.png"
                  alt="bug"
                />
              </div>
              <form
                onSubmit={handleSubmit}
                className="form-login-inscription rounded overflow-hidden shadow-lg"
              >
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="sexe"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bonjour
                  </label>
                  <select
                    id="sexe"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={values.sexe}
                    onChange={onChangeinput}
                    name="sexe"
                  >
                    <option defaultValue="Madame">Madame</option>
                    <option value="Monsieur">Monsieur</option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <FormInputInsciption
                    placeholder=""
                    value={values.emailI}
                    onChange={onChangeinput}
                    type="texte"
                    name="emailI"
                    id="emailI"
                    errorMessage="L'email renseigné n'est pas bon. ex: elemple@example.fr"
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  />
                  <label
                    htmlFor="emailI"
                    className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <FormInputInsciption
                    placeholder=""
                    value={values.passwordI}
                    onChange={onChangeinput}
                    type="password"
                    name="passwordI"
                    id="passwordI"
                    errorMessage="Le mot de passe doit comporter 8 à 20 caractères et inclure au moins une lettre, un chiffre et un caractère spécial !"
                    pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                  />
                  <label
                    htmlFor="passwordI"
                    className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Mot de passe
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <FormInputInsciption
                    placeholder=""
                    value={values.confirmPassword}
                    onChange={onChangeinput}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    errorMessage="Le mot de passe doit comporter 8 à 20 caractères et inclure au moins une lettre, un chiffre et un caractère spécial !"
                    pattern={values.passwordI}
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirmer Mot de passe
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <FormInputInsciption
                      placeholder=""
                      value={values.nom}
                      onChange={onChangeinput}
                      type="texte"
                      name="nom"
                      id="nom"
                      errorMessage="Le nom doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !"
                      pattern="^[A-Za-z]{3,16}$"
                    />
                    <label
                      htmlFor="nom"
                      className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Nom
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <FormInputInsciption
                      placeholder=""
                      value={values.prenom}
                      onChange={onChangeinput}
                      type="texte"
                      name="prenom"
                      id="prenom"
                      errorMessage="Le prenom doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !"
                      pattern="^[A-Za-z]{3,16}$"
                    />
                    <label
                      htmlFor="prenom"
                      className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Prénom
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <FormInputInsciption
                      placeholder=""
                      value={values.dateNaissnance}
                      onChange={onChangeinput}
                      type="date"
                      name="dateNaissnance"
                      id="dateNaissnance"
                      errorMessage=""
                    />
                    <label
                      htmlFor="dateNaissnance"
                      className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Date de naissance
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <FormInputInsciption
                      placeholder=""
                      value={values.file}
                      onChange={onChangeinput}
                      type="file"
                      name="file"
                      id="file"
                      errorMessage=""
                    />
                    <label
                      className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                    peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="file"
                    >
                      Photo de profil
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <FormInputInsciption
                      placeholder=""
                      value={values.telNumero}
                      onChange={onChangeinput}
                      type="tel"
                      name="telNumero"
                      id="telNumero"
                      errorMessage=""
                    />
                    <label
                      htmlFor="telNumero"
                      className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Tel number (+337 77 77 77 77)
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <FormInputInsciption
                      placeholder=""
                      value={values.compagny}
                      onChange={onChangeinput}
                      type="texte"
                      name="compagny"
                      id="compagny"
                      errorMessage="La compagnie doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !"
                      pattern="^[A-Za-z]{3,16}$"
                    />
                    <label
                      htmlFor="compagny"
                      className="peer-focus:font-medium absolute  text-black-500 dark:text-black
                                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                                peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100
                                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company (Ex. Google)
                    </label>
                  </div>
                </div>

                <br />
                <button
                  type="submit"
                  className="button-home text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
                                        focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg
                                        px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500
                                        dark:hover:bg-[#050708]/30 mr-2 mb-2 input-home w-full"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inscription;
