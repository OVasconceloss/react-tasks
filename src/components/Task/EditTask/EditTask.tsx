import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface EditTaskProps {
    task: {
        completed: boolean,
        id: string,
        taskTitle: string,
        taskDescription: string
    },
    openEditModal: any;
    handleEdit: (id: string, taskTitle: string, taskDescription: string) => Promise<void>;
}

export const EditTask: React.FC<EditTaskProps> = ({openEditModal, task, handleEdit}) => {
    const currentYear = new Date().getFullYear();

    const [taskTitle, setTaskTitle] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        handleEdit(task.id, taskTitle, taskDescription)

        setTaskTitle("");
        setTaskDescription("");

        openEditModal(false);
    }
    
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-1/2 p-8 rounded shadow-md">
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl">Edit Task "{task.taskTitle}"</h2>
                    <button>
                        <FontAwesomeIcon icon={faXmark} onClick={openEditModal} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="flex flex-col my-5">
                            <label htmlFor="">Task Name</label>
                            <input 
                            className="p-1 my-2 rounded border border-solid border-[#0000002C] trasition duration-500 ease-in-out outline-none focus:border-l-blue" 
                            type="name" name="task" placeholder="Ex: Study Javascript" value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} />
                        </div>
                        <div className="flex flex-col my-5">
                            <label htmlFor="">Task Description</label>
                            <textarea 
                            className="p-1 my-2 rounded border border-solid border-[#0000002C] trasition duration-500 ease-in-out outline-none focus:border-l-blue" 
                            placeholder="Ex: Study Javascript for school" name="description" cols={30} rows={10} value={taskDescription} 
                            onChange={(event) => setTaskDescription(event.target.value)}></textarea>
                        </div>
                    </div>
                    <button type={`submit`} className="p-2 my-2 w-full rounded text-white cursor-pointer border border-solid transition duration-500 ease-in-out
                     border-white bg-l-blue hover:border-l-blue hover:bg-white hover:text-l-blue uppercase">Edit</button>
                </form>
                <div className="text-center">
                    <h2 className="text-[0.9rem]">Copyright &copy; {currentYear} Victor Vasconcelos</h2>
                </div>
            </div>
        </div>
    )
}