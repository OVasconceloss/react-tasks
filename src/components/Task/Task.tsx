import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TaskProps {
    task: {
        completed: boolean,
        id: string,
        taskTitle: string,
        taskDescription: string
    },
    handleDelete: (id: string) => Promise<void>;
}

export const Task: React.FC<TaskProps> = ({task, handleDelete}) => {
    console.log(task)
    return (
        <div className="bg-gray-100 p-5 my-8 rounded border border-solid border-[#0000002C] flex justify-between items-center">
            <h3 className="text-lg">{task.taskTitle}</h3>
            <div>
                <button className="task-button bg-red-400" onClick={() => handleDelete(task.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="task-button bg-l-blue">
                    <FontAwesomeIcon icon={faPencil} />
                </button>
            </div>
        </div>
    );
};