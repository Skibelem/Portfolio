import React, { useState } from "react";
import { motion } from "framer-motion";
import { db, collection, addDoc } from "../firebaseConfig"; // Import Firestore functions

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3s
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen bg-gray-100 px-4"
    >
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-600 text-center mb-4"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
