import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Styles/navbar.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3><img src="/img/AKB_menu.png" alt="bug" height={80} /></h3>
            <nav ref={navRef}>
                <a href="/#">Se Connecter</a>
                <a href="/#">Des questions</a>
                <a href="/#">Louez ma voiture</a>
                <a href="/#">A propos</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;