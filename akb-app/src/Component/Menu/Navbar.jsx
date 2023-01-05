import {useRef} from "react";
import  {FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>logo</h3>
            <nav ref={navRef}>
                <a href="/#">Se Connecter</a>
                <a href="/#">Des questions</a>
                <a href="/#">Louez ma voiture</a>
                <a href="/#">A propos</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </nav>
        </header>
    );

}

export default Navbar;