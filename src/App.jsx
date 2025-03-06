import React from "react";
import NavbarWithAnimation from "./Components/NavbarWithAnimation";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import { motion } from "framer-motion";

const App = () => {
  return (
      <motion.div 
        className="w-full overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NavbarWithAnimation />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </motion.div>
  );
};

export default App;
