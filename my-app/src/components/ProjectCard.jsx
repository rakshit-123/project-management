import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, onDelete }) => (
  <div className="border rounded p-4 bg-white shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
    <div className="flex justify-between items-center">
      <Link
        to={`/project/${project.id}`}
        className="text-blue-500 hover:underline"
      >
        View Tasks
      </Link>
      <button onClick={() => onDelete(project.id)} className="text-red-600">
        Delete
      </button>
    </div>
  </div>
);

export default ProjectCard;
