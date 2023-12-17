import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Task: React.FC = () => {
    return (
        <div className="bg-gray-100 p-5 my-8 rounded border border-solid border-[#0000002C] flex justify-between items-center">
            <h3 className="text-lg">Task Title</h3>
            <div>
                <button className="task-button bg-red-400">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="task-button bg-l-blue">
                    <FontAwesomeIcon icon={faPencil} />
                </button>
            </div>
        </div>
    );
};