import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { deleteTask, updateTaskDescription } from "../redux/tasksSlice";
import RichTextEditor from "./RichTextEditor";
import { useDispatch } from "react-redux";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const editorRef = useRef();
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
      className={`p-1 bg-white rounded-lg shadow-lg mb-4 ${
        task.status === "todo"
          ? "border-orange-400"
          : task.status === "inprogress"
          ? ""
          : "border-emerald-400"
      }`}
    >
      <p className="font-bold text-xl text-[#17a2b8] mb-3">{task.title}</p>
      <p className="font-bold text-xl text-[#17a2b8] mb-3">
        {task.description}
      </p>

      <div className="mb-4">
        <RichTextEditor description={task?.description} ref={editorRef} />
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="submit-btn text-sm text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
      >
        Delete
      </button>
      <button
        onClick={() => {
          const content = editorRef.current?.getContent();
          dispatch(
            updateTaskDescription({
              description: content,
              id: task.id,
            })
          );
        }}
        className="submit-btn text-sm text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
      >
        Add task description
      </button>
    </div>
  );
};

export default TaskCard;
