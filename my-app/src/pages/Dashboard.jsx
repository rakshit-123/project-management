import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProject, deleteProject } from "../redux/projectsSlice";
import AddProjectForm from "../components/AddProjectForm";
import ProjectCard from "../components/ProjectCard";

const Dashboard = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>
      <AddProjectForm onSubmit={(title) => dispatch(addProject(title))} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={() => dispatch(deleteProject(project.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
