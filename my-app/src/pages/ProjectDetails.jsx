import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddTaskForm from "../components/AddTaskForm";
import TaskBoard from "../components/TaskBoard";
import { addTask } from "../redux/tasksSlice";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    state.tasks.filter((t) => t.projectId === id)
  );

  const grouped = ["todo", "inprogress", "done"].map((status) => ({
    name: status,
    count: tasks.filter((t) => t.status === status).length,
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Project Tasks</h2>

      <AddTaskForm
        onSubmit={(data) =>
          dispatch(addTask({ ...data, projectId: id, description: "" }))
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["todo", "inprogress", "done"].map((status) => (
          <TaskBoard
            key={status}
            status={status}
            tasks={tasks.filter((t) => t.status === status)}
            dispatch={dispatch}
          />
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-6">Task Distribution</h3>
      <div className="mt-4">
        <BarChart width={500} height={200} data={grouped}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Bar dataKey="count" fill="#60a5fa" />
        </BarChart>
      </div>
    </div>
  );
};

export default ProjectDetails;
