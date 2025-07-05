import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/About";
import Skills from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
import Contact from "../components/Contact";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-black">
        <Hero />
        <Skills />
        <ProjectSection />
        <Contact/>
      </div>
    </>
  );
};

export default Home;
