import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
    openModal: () => void;
}

export const CreateModal: React.FC<ModalProps> = ({openModal}) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-1/2 p-8 rounded shadow-md">
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl">Create Task</h2>
                    <button onClick={openModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col my-5">
                        <label htmlFor="">Task Name</label>
                        <input 
                        className="p-1 my-2 rounded border border-solid border-[#0000002C] trasition duration-500 ease-in-out outline-none focus:border-l-blue" 
                        type="name" name="task" placeholder="Ex: Study Javascript" />
                    </div>
                    <div className="flex flex-col my-5">
                        <label htmlFor="">Task Description</label>
                        <textarea 
                        className="p-1 my-2 rounded border border-solid border-[#0000002C] trasition duration-500 ease-in-out outline-none focus:border-l-blue" 
                        placeholder="Ex: Study Javascript for school" name="description" cols={30} rows={10}></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-[0.9rem]">Copyright &copy; {currentYear} Victor Vasconcelos</h2>
                </div>
            </div>
        </div>
    )
};