import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden text-left shadow-md hover:shadow-xl hover:scale-[1.02] transition-all border border-zinc-800 flex flex-col h-full">
      
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-zinc-700 text-gray-300 text-lg font-semibold">
          Project Image
        </div>
      )}

      <div className="p-2 flex flex-col flex-grow">
        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-zinc-800 border border-gray-600 text-white px-2 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-white text-black px-3 py-1 rounded-xl border border-black hover:bg-zinc-200 transition"
            >
              <CiGlobe className="text-lg" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-white text-black px-3 py-1 rounded-xl border border-black hover:bg-zinc-200 transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
