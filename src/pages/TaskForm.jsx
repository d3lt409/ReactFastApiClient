import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, getTask, updateTask } from "../server/tasks";


const TaskForm = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const navigate = useNavigate();

  const handleTitle = (e) => {
    settitle(e.target.value);
  };
  const handleDescription = (e) => {
    setdescription(e.target.value);
  };
  const handleSutmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const { data, status } = await createTask({ title, description });
      console.log(data, status);
    } else {
      const { data, status } = await updateTask(params.id, {
        title,
        description,
      });
      console.log(data, status);
    }
    navigate("/");
  };

  const params = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getTask(params.id);
      settitle(data.title);
      setdescription(data.description);
    };
    if (params.id) {
      fetchTask();
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto h-[calc(100vh-20rem)] max-w-lg">
        <form className="bg-gray-700 w-full rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSutmit}>
          <h1 className="text-xl font-bold text-center mb-4">
            {params.id ? "Update task" : "Create task"}
          </h1>
          <div className="mb-4">
          <input
            onChange={handleTitle}
            type="text"
            placeholder="Insert title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
          />
          </div>
          <div className="mb-4">
          <textarea
            onChange={handleDescription}
            placeholder="Insert desctiption"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            value={description ? description : ""}
          ></textarea>
          </div>
         
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            {params.id ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
