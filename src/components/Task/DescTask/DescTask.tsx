import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
    task: {
        completed: boolean,
        id: string,
        taskTitle: string,
        taskDescription: string
    },
    openModal: () => void;
}

export const DescTask: React.FC<ModalProps> = ({openModal, task}) => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-1/2 p-8 rounded shadow-md">
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl">Task "{task.taskTitle}"</h2>
                    <button>
                        <FontAwesomeIcon icon={faXmark} onClick={openModal} />
                    </button>
                </div>
                <div className="py-5 px-5 my-5 rounded bg-gray-200">
                    <p className="text-center text-lg">
                        {task.taskDescription}
                    </p>
                </div>
                <div className="text-center">
                    <h2 className="text-[0.9rem]">Copyright &copy; {currentYear} Victor Vasconcelos</h2>
                </div>
            </div>
        </div>
    );
};