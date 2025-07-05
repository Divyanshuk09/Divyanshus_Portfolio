import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0e0e0e] text-white py-24 px-6 scroll-mt-24 border-t border-zinc-800"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 px-4">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Want to <br /> start a new project?
          </h2>
          <p className="text-zinc-400">Or just say hello. 👋</p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 space-y-8 md:text-right">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Socials :</h3>
            <div className="flex flex-col gap-3 items-start md:items-end ">
              <a
                href="https://www.linkedin.com/in/divyanshuk09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
              <a
                href="https://github.com/Divyanshuk09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://instagram.com/divyanshuk09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition"
              >
                <FaInstagram className="text-lg" /> Instagram
              </a>
            </div>
          </div>

          {/* Email & Button */}
          <div className="md:text-right">
            <p className="text-gray-300 text-sm mb-3">
              divyanshukushwah2003@gmail.com
            </p>
            <a
              href="mailto:divyanshukushwah2003@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-zinc-200 transition group"
            >
              Send Mail{" "}
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
