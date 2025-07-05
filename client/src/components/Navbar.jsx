import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0e0e0e] text-white z-50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Use RouterLink for navigating to homepage */}
        <h1 className="text-2xl font-bold">
          Portfolio
        </h1>

        <ul className="flex gap-6 text-sm sm:text-base font-medium">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
