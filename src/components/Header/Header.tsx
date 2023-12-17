import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="bg-gray-100 p-5 rounded-b-md flex flex-row justify-between items-center border-b border-solid border-[#0000002C]">
            <div className="flex flex-row items-end">
                <h1 className="text-3xl">React Tasks</h1>
                <nav className="mx-2 px-5">
                    <Link to={`/`} className="header-link">Home</Link>
                    <Link to={`/about`} className="header-link">About</Link>
                    <Link to={`https://github.com/OVasconceloss/react-tasks`} target={`_blank`} className="header-link">Github</Link>
                </nav>
            </div>
            <div>
                <button className="w-20 p-1 m-2 rounded-full text-base border border-solid border-l-blue text-l-blue text-center
                transition duration-500 ease-in-out hover:text-white hover:bg-l-blue hover:border-transparent">Sign Up</button>
                <button className="w-20 bg-l-blue p-1 m-2 rounded-full text-base border border-solid border-l-blue text-white text-center 
                transition duration-500 ease-in-out hover:text-l-blue hover:bg-transparent hover:border-l-blue">Sign In</button>
            </div>
        </header>
    );
};