import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
    openModal: () => void;
}

export const DescTask: React.FC<ModalProps> = ({openModal}) => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-1/2 p-8 rounded shadow-md">
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl">""</h2>
                    <button>
                        <FontAwesomeIcon icon={faXmark} onClick={openModal} />
                    </button>
                </div>
                <div className="text-center">
                    <h2 className="text-[0.9rem]">Copyright &copy; {currentYear} Victor Vasconcelos</h2>
                </div>
            </div>
        </div>
    );
};