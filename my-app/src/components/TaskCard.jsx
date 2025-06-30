import React from "react";
import { useDrag } from "react-dnd";
import { deleteTask } from "../redux/tasksSlice";
import RichTextEditor from "./RichTextEditor";

const TaskCard = ({ task, dispatch }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className={`p-4 bg-white rounded-lg shadow-lg mb-4 border-l-4 ${
        task.status === "todo"
          ? "border-orange-400"
          : task.status === "inprogress"
          ? "border-[#17a2b8]"
          : "border-emerald-400"
      }`}
    >
      <p className="font-bold text-xl text-[#17a2b8] mb-3">{task.title}</p>
      <div className="mb-4">
        <RichTextEditor />
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-sm text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
