import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../../Styles/navbar.sass"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <a href="/"><h3><img className="img-taille" src="/img/AKB_menu.png" alt="bug"/></h3></a>
            <nav ref={navRef}>
                <a href="/auth/login">Se Connecter</a>
                <a href="/">Des questions</a>
                <a href="/">Louez ma voiture</a>
                <a href="/about">A propos</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
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