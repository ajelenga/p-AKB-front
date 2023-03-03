import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Menu/Navbar";

const PageError = () => {
    return (
        <section className="home_LOGIN">
            <Navbar/>
            <div className="homepage">
                <div className="search_hero">
                    <div className="container search_hero__content_login">
                        <div className="home-page-cars rounded overflow-hidden">
                        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                                <div className="max-w-md text-center">
                                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                                        <span className="sr-only">Error</span>404
                                    </h2>
                                    <p className="text-2xl font-semibold md:text-3xl">Désolé, nous n'avons pas pu trouver cette page.</p>
                                    <p className="mt-4 mb-8 dark:text-gray-400">Mais ne vous inquiétez pas, vous pouvez trouver beaucoup d'autres choses sur notre page d'accueil.</p>
                                    <button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" onClick={() => navigate("/")}>Retour à la page d'accueil</button>
                                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Retour à la page d'accueil</a>
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
