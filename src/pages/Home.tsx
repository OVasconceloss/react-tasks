import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const Home: React.FC = () => {
    return (
        <>
        <Header />
        <main className="w-full h-[40.5rem] p-5">
            <div className="w-full justify-end text-right">
                <button className="p-2 w-32 rounded text-white cursor-pointer border border-solid transition 
                duration-500 ease-in-out border-white bg-l-blue hover:border-l-blue hover:bg-white hover:text-l-blue">New Task</button>
            </div>
        </main>
        <Footer />
        </>
    );
};

export default Home;