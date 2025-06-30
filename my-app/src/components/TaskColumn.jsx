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
      className={`flex-1 bg-white p-6 rounded-xl shadow-2xl border-2 border-[#17a2b8] transition-all duration-300 ease-in-out ${
        isOver ? "bg-gray-100" : ""
      }`}
    >
      <h3 className="text-3xl font-black mb-8 text-center text-white bg-[#17a2b8] p-4 rounded-t-xl">
        {status}
      </h3>
      <div className="space-y-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
