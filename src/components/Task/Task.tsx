import { useState } from "react";
import { DescTask } from "./DescTask/DescTask";
import { EditTask } from "./EditTask/EditTask";
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
    handleEdit: (id: string, taskTitle: string, taskDescription: string) => Promise<void>;
}

export const Task: React.FC<TaskProps> = ({task: { completed, id, taskTitle, taskDescription }, handleDelete, handleEdit}) => {
    const [isDescOpen, setIsDescOpen] = useState<Boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<Boolean>(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState<Boolean>(false);

    const openModal = () => !isDescOpen ? setIsDescOpen(true) : setIsDescOpen(false);

    const openEditModal = () => !isEditOpen ? setIsEditOpen(true) : setIsEditOpen(false);

    const openDeleteModal = () => !isDeleteOpen ? setIsDeleteOpen(true) : setIsDeleteOpen(false);

    return (
        <>
            <div 
            className="bg-gray-100 p-5 my-8 rounded border border-solid border-[#0000002C] flex 
            justify-between items-center cursor-pointer hover:border-l-blue transition duration-500 ease-in-out">
                <h3 className="text-lg">{taskTitle}</h3>
                <div>
                    <button 
                    className="task-button bg-red-400 hover:text-red-400 hover:border-red-400" onClick={() => {openDeleteModal();}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="task-button bg-l-blue hover:text-l-blue hover:border-l-blue" onClick={() => {openEditModal();}}>
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                </div>
            </div>
            {isDescOpen && <DescTask openModal={openModal} task={{ completed, id, taskTitle, taskDescription }} />}
            {isEditOpen && <EditTask openEditModal={openEditModal} handleEdit={handleEdit} task={{completed, id, taskTitle, taskDescription}} />}
            {isDeleteOpen && <DeleteTask openDeleteModal={openDeleteModal} task={{ completed, id, taskTitle, taskDescription }} handleDelete={handleDelete} />}
        </>
    );
};