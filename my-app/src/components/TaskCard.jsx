import React from "react";
import { useDrag } from "react-dnd";
import ReactQuill from "react-quill";
import { updateTaskDescription, deleteTask } from "../redux/tasksSlice";
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
      className="p-2 bg-white rounded shadow mb-2"
    >
      <p className="font-semibold">{task.title}</p>
      {/* <ReactQuill
        value={"task.description"}
        onChange={(desc) =>
          dispatch(updateTaskDescription({ id: task.id, description: desc }))
        }
        className="mb-2"
        theme="snow"
      /> */}
      <RichTextEditor />
      {/* <div>{task.description}</div> */}
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-sm text-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
