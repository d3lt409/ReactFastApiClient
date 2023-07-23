import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-gray-700">
      <h1 className="flex mx-auto items-center text-center text-5xl justify-center my-auto py-6 font-extrabold dark:text-white">
          Your tasks
        </h1>
      <div className="grid grid-cols-3 border gap-x-6 gap-y-5 justify-center p-5 border-gray-200 dark:border-gray-700 w-full">
        {tasks.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
