import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { moveTask } from "../redux/tasksSlice";

const TaskBoard = ({ status, tasks, dispatch }) => {
  const [, drop] = useDrop({
    accept: "task",
    drop: (item) => dispatch(moveTask({ id: item.id, status })),
  });

  return (
    <div ref={drop} className="bg-gray-100 rounded p-4 min-h-[300px]">
      <h3 className="font-bold capitalize mb-3">
        {status.replace(/([a-z])([A-Z])/g, "$1 $2")}
      </h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TaskBoard;
