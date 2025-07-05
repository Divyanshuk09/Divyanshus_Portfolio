import React from "react";

const skills = [
  "Html",
  "Css",
  "JavaScript",
  "Node.js",
  "React.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "JWT",
  "Vs Code",
  "Postman",
  "Github",
];

const Skills = () => {
  return (
    <section id="skills" className=" bg-black text-white py-10">
      <div className="max-w-4xl mx-auto px-4 text-left">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-start">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-zinc-400 text-black px-4 py-1.5 rounded-xl text-sm font-semibold shadow hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
