import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Divyanshuk09",{
      headers:{
        Authorization:`token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      }
    })
      .then((res) => res.json())
      .then((data) => setAvatarUrl(data.avatar_url));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="scroll-mt-24 max-w-4xl mx-auto pt-24 px-4 flex flex-col sm:flex-row items-center gap-6 text-white"
      >
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm Divyanshu 👋
          </h1>
          <p className="text-sm sm:text-lg text-gray-400 leading-relaxed">
            A MERN stack developer who loves building clean, real-world web
            applications with awesome UIs.
          </p>
        </div>

        {avatarUrl && (
          <img
            src={avatarUrl}
            alt="GitHub Avatar"
            className="w-40 h-40 rounded-full border-4 border-zinc-700 shadow-md object-cover"
          />
        )}
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-left text-white">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
          Thanks for being here. I'm Divyanshu, a MERN Stack Developer who loves
          creating feature-rich web experiences that users genuinely enjoy.
          <br />
          Currently sharpening my skills in the MERN stack and deployment.
          <br />
          I enjoy solving complex problems and turning them into smooth,
          intuitive features. Open to tech talks, ideas, and collabs. Let's build
          something dope together!
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://drive.google.com/file/d/1uh_a3wlL48SAPNBhxAM6ogwnxQ8pzwSM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold px-2 py-1 rounded-md hover:bg-zinc-200 transition"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/divyanshuk09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 border rounded-md px-2 py-1 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Divyanshuk09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 border rounded-md px-2 py-1 hover:text-white transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto py-5 px-4 text-left text-white">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="text-gray-400 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-white">
            G.L. Bajaj Institute of Technology and Management
          </p>
          <p>Bachelor of Technology</p>
          <p>2021 - 2025</p>
        </div>
      </section>
    </>
  );
};

export default About;
