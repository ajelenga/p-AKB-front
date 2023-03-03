import {useNavigate} from 'react-router-dom';
import Navbar from "../components/Menu/Navbar";

const PageError = () => {
    const navigate = useNavigate();
    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="home-page-cars rounded overflow-hidden">
                            <section className="flex items-center h-full p-16 ">
                                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                                    <div className="max-w-md text-center">
                                        <h2 className="mb-8 font-extrabold text-9xl text-gray-900 dark:text-black">
                                            <span className="sr-only">Error</span>404
                                        </h2>
                                        <p className="text-2xl font-semibold md:text-3xl">Désolé, nous n'avons pas pu
                                            trouver cette page.</p>
                                        <p className="mt-4 mb-8 text-gray-900 dark:text-black">Mais ne vous inquiétez
                                            pas, vous
                                            pouvez trouver beaucoup d'autres choses sur notre page d'accueil.</p>
                                        <button
                                            className="px-8 py-3 font-semibold rounded text-white bg-[#24292F] hover:bg-[#24292F]/90"
                                            onClick={() => navigate(-1)}>Retour à la page d'accueil
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageError;
