import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DeleteTaskProps {
    task: {
        completed: boolean,
        id: string,
        taskTitle: string,
        taskDescription: string
    },
    openModal: () => void;
    openDeleteModal: () => void;
    handleDelete: (id: string) => Promise<void>;
};

export const DeleteTask: React.FC<DeleteTaskProps> = ({task, handleDelete, openDeleteModal, openModal}) => {
    openModal();
    const currentYear = new Date().getFullYear();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-1/2 p-8 rounded shadow-md">
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl">Delete Task</h2>
                    <button>
                        <FontAwesomeIcon icon={faXmark} onClick={openDeleteModal}/>
                    </button>
                </div>
                <div className="py-5 px-5 my-5 flex flex-col justify-center items-center">
                    <h2 className="text-center text-xl">Are you sure you want to delete the task {task.taskTitle}?</h2>
                    <div className="my-5">
                        <button 
                        className="p-1 mx-5 w-20 bg-red-500 text-white rounded 
                        transition duration-500 ease-in-out hover:bg-red-800" onClick={() => handleDelete(task.id)}>Yes</button>
                        <button 
                        className="p-1 mx-5 w-20 bg-l-blue  text-white rounded 
                        transition duration-500 ease-in-out hover:bg-blue-800" onClick={openDeleteModal}>No</button>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-[0.9rem]">Copyright &copy; {currentYear} Victor Vasconcelos</h2>
                </div>
        </div>
    </div>
    );
};