import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", link: "#", desc: "A cool project." },
  { title: "Project 2", link: "#", desc: "Another awesome project." },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <motion.div 
        className="grid md:grid-cols-2 gap-4 mt-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.section 
            key={index} 
            className="p-5 border rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.desc}</p>
            <a href={project.link} className="text-blue-500">View Project</a>
          </motion.section>
        ))}
      </motion.div>
    </section>
  );
};


export default Projects;
