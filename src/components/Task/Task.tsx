import { useState } from "react";
import { DescTask } from "./DescTask/DescTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteTask } from "./DeleteTask/DeleteTask";

interface TaskProps {
    task: {
        completed: boolean,
        id: string,
        taskTitle: string,
        taskDescription: string
    },
    handleDelete: (id: string) => Promise<void>;
}

export const Task: React.FC<TaskProps> = ({task: { completed, id, taskTitle, taskDescription }, handleDelete}) => {
    const [isDescOpen, setIsDescOpen] = useState<Boolean>(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState<Boolean>(false);

    const openModal = () => !isDescOpen ? setIsDescOpen(true) : setIsDescOpen(false);

    const openDeleteModal = () => !isDeleteOpen ? setIsDeleteOpen(true) : setIsDeleteOpen(false);

    return (
        <>
            <div 
            className="bg-gray-100 p-5 my-8 rounded border border-solid border-[#0000002C] flex 
            justify-between items-center cursor-pointer hover:border-l-blue transition duration-500 ease-in-out" onClick={openModal}>
                <h3 className="text-lg">{taskTitle}</h3>
                <div>
                    <button 
                    className="task-button bg-red-400 hover:text-red-400 hover:border-red-400" onClick={() => {
                        openModal();
                        openDeleteModal();
                    }}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="task-button bg-l-blue hover:text-l-blue hover:border-l-blue">
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                </div>
            </div>
            {isDescOpen && <DescTask openModal={openModal} task={{ completed, id, taskTitle, taskDescription }} />}
            {isDeleteOpen && <DeleteTask openModal={openModal} openDeleteModal={openDeleteModal} task={{ completed, id, taskTitle, taskDescription }} handleDelete={handleDelete} />}
        </>
    );
};