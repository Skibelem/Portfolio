import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p className="text-gray-600">Feel free to reach out via email or social media.</p>
      
      <motion.section 
        href="mailto:youremail@example.com"
        className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Send an Email
      </motion.section>
    </section>
  );
};

export default Contact;
