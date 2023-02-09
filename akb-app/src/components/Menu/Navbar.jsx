import {useContext, useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../../Styles/navbar.sass";
import Auth from "../../contexts/Auth";
import {logout} from "../../services/AuthApi";
import {toast} from "react-toastify";

function Navbar() {
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
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
    const notifyInfo = (string) => toast.info(string, val);

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        notifyInfo('Revenez vite nous voir 👋!')
    }

    return (
        <header>
            <a href="/">
                <h3>
                    <img className="img-taille" src="/img/AKB_menu.png" alt="bug"/>
                </h3>
            </a>
            <nav ref={navRef}>
                {(!isAuthenticated && (
                    <>
                        <a href="/connexion">Se Connecter</a>
                        <a href="/inscription">S'inscrire</a>
                    </>
                )) || (
                    <>
                        <a href="/compte/acompte">Mon compte</a>
                        <a className="link-navbar" onClick={handleLogout}>Déconnexion</a>
                    </>
                )}
                <a href="/">Des questions</a>
                <a href="/">Louez ma voiture</a>
                <a href="/about">A propos</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;
