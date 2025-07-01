import "./Dashboard.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProject, deleteProject } from "../redux/projectsSlice";
import AddProjectForm from "../components/AddProjectForm";
import ProjectCard from "../components/ProjectCard";

const Dashboard = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <div className="p-10 min-h-screen dashboard">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-10  pb-6">
          Project Dashboard
        </h1>
        <div className="mb-10">
          <AddProjectForm onSubmit={(title) => dispatch(addProject(title))} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={() => dispatch(deleteProject(project.id))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
