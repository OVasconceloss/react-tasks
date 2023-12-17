import { Link } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const Home: React.FC = () => {
    return (
        <>
        <Header />
        <main className="w-full h-[40.5rem]">
            <section className="w-44 h-full p-5 bg-l-blue rounded-r-md">
                <Link to={`/`}>
                    <h2 className="menu-option">All Tasks</h2>
                </Link>
                <Link to={`/completed`}>
                    <h2 className="menu-option">Completed Tasks</h2>
                </Link>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default Home;