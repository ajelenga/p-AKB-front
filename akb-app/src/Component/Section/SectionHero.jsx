import "../../Styles/sectionHero.css"
import Navbar from "../Menu/Navbar";

function SectionHero() {
    return (
        <section className="home">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionHero;