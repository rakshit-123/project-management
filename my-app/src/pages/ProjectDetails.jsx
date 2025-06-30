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
    <div className="p-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-[#17a2b8] mb-10 border-b-4 pb-6 border-[#17a2b8]">
          Project Tasks
        </h2>

        <div className="mb-10">
          <AddTaskForm
            onSubmit={(data) =>
              dispatch(addTask({ ...data, projectId: id, description: "" }))
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["todo", "inprogress", "done"].map((status) => (
            <TaskBoard
              key={status}
              status={status}
              tasks={tasks.filter((t) => t.status === status)}
              dispatch={dispatch}
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-2xl border-2 border-[#17a2b8]">
          <h3 className="text-3xl font-extrabold text-[#17a2b8] mb-8">
            Task Distribution
          </h3>
          <div className="flex justify-center">
            <BarChart width={700} height={400} data={grouped}>
              <XAxis dataKey="name" tick={{ fill: "#333" }} />
              <YAxis allowDecimals={false} tick={{ fill: "#333" }} />
              <Bar dataKey="count" fill="#17a2b8" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
