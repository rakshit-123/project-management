import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, onDelete }) => (
  <div className="rounded-lg p-6 bg-white text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-2xl font-extrabold mb-4 text-black">{project.title}</h3>
    <div className="flex  items-center mt-6 ml-3">
      <Link
        to={`/project/${project.id}`}
        className="bg-white text-gray-500 no-underline font-bold px-6 py-3 rounded-full  m-2 gap-2"
      >
        Task
      </Link>
      <button onClick={() => onDelete(project.id)} className="">
        Delete
      </button>
    </div>
  </div>
);

export default ProjectCard;
