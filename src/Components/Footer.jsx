import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold">&lt;/joe&gt;</h2>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:ml-24 md:mt-0">
          <a href="#" className="hover:text-yellow-500 transition"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-yellow-500 transition"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-yellow-500 transition"><FaLinkedin size={24} /></a>
          <a href="#" className="hover:text-yellow-500 transition"><FaGithub size={24} /></a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} &lt;/joe&gt;. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;