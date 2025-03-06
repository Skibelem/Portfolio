import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-4">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

        <input type="hidden" name="form-name" value="contact" />

        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <label className="block mb-2">Message</label>
        <textarea
          name="message"
          required
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
