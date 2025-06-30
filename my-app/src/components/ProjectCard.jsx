import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, onDelete }) => (
  <div className="rounded-lg p-6 bg-white text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-2xl font-extrabold mb-4 text-black">{project.title}</h3>
    <div className="flex justify-between items-center mt-6">
      <Link
        to={`/project/${project.id}`}
        className="bg-white text-[#fafafa] no-underline font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300:"
      >
        View Tasks
      </Link>
      <button
        onClick={() => onDelete(project.id)}
        className="bg-red-500 text-white font-bold px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300"
      >
        Delete
      </button>
    </div>
  </div>
);

export default ProjectCard;
