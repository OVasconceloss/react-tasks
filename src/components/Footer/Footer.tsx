import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-d-black p-2.5 rounded-t-md absolute bottom-0 w-full">
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-white">Copyright &copy; {currentYear} Victor Vasconcelos</h2>
                <div>
                    <Link to={`/`} className="text-white footer-link">Home</Link>
                    <Link to={`/about`} className="text-white footer-link">About</Link>
                    <Link to={`https://github.com/OVasconceloss/react-tasks`} target={`_blank`} className="text-white header-link">Github</Link>
                </div>
                <div>
                   <Link to={`https://github.com/OVasconceloss/react-tasks`} target={'_blank'}>
                        <FontAwesomeIcon icon={faGithub} className="text-white p-2 footer-link" />
                    </Link>
                   <Link to={`https://www.linkedin.com/in/victor-vasconcelos-024b65283/`} target={'_blank'}>
                        <FontAwesomeIcon icon={faLinkedin} className="text-white p-2 footer-link" />
                    </Link>
                   <Link to={`https://www.instagram.com/victor8g/`} target={'_blank'}>
                        <FontAwesomeIcon icon={faInstagram} className="text-white p-2 footer-link" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};