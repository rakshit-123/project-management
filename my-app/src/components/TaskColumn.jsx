import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const TaskColumn = ({ status, tasks, onTaskDrop, projectId }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) => onTaskDrop(projectId, item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`flex-1 bg-gray-100 p-4 rounded-xl shadow-inner transition-all ${
        isOver ? "bg-blue-100" : ""
      }`}
    >
      <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
        {status}
      </h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
