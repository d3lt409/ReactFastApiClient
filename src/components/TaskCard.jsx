import { useNavigate } from "react-router-dom";
import { deleteTask, updateTask } from "../server/tasks";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { useState, useEffect } from "react";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const [done, setdone] = useState(false)

  useEffect(() => {
    setdone(task.done )
  }, [] )

  const handleClick = () => {
    navigate(`/task/${task._id}`);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    const response = await deleteTask(task._id);
  };

  const handleComplete = async (e) => {
    e.stopPropagation();
    
    const response = await updateTask(task._id, {done});
    response.statusText == "OK" && setdone(!done)
  };

  const colorComplete = done
    ? "text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-900"
    : "text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-green-900";
  return (
    <figure className="grid flex-col justify-center place-items-center w-full py-5 text-center rounded-xl bg-white border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700 whitespace-normal">
      <blockquote
        onClick={handleClick}
        className="w-full mx-auto border-gray-500 border p-3 rounded-3xl text-gray-500 mb-8 dark:text-gray-400 whitespace-normal scroll-m-0 overflow-auto "
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {task.title}
        </h3>
        <p className="my-4 ">{task.description}</p>
      </blockquote>
      <div className="flex justify-items-stretch  gap-x-6 items-center">
        <button
          type="button"
          onClick={handleComplete}
          className={`text-white ${colorComplete} font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
          <MdDone />
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <RiDeleteBin2Line />
        </button>
      </div>
    </figure>
  );
};

export default TaskCard;
