import "../../Styles/sectionHero.css"
import Navbar from "../Menu/Navbar";
import { AiOutlineDown } from "react-icons/ai";

function SectionHero() {
   return (
        <section className="home">
            <Navbar/>
            <div className="homepage" >
                <div className="search_hero">
                    <div className="container search_hero__content">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionHero;