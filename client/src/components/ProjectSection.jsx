import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../features/project/projectSlice";
import ProjectCard from "./ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectSection = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector((state) => state.project);
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const start = page * itemsPerPage;
  const visible = projects.slice(start, start + itemsPerPage);

  return (
    <section className="py-10 bg-black text-white " id="projects">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Check out my latest work</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          From minimal websites to full‑stack apps—here’s a peek at my
          favorites.
        </p>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid sm:grid-cols-2 gap-6">
          {visible.map((proj) => (
            <ProjectCard key={proj._id} project={proj} />
          ))}
        </div>

        {/* Pagination with Arrows */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setPage(Math.max(page - 1, 0))}
            disabled={page === 0}
            className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition disabled:opacity-30"
          >
            <FaChevronLeft />
          </button>

          <span className="text-sm text-gray-400">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
            disabled={page >= totalPages - 1}
            className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition disabled:opacity-30"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
