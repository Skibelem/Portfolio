import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef, useEffect } from "react"; // Importing useRef and useEffect

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { width: "0px" },
      { width: "100%", duration: 2, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white text-center px-4">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-5xl md:text-7xl font-bold">
        <span className="text-yellow-500"></joe></span>
      </h1>
      <h2
        ref={textRef}
        className="text-2xl md:text-2xl mt-4 border-r-2 border-white pr-2 overflow-hidden"
      >
        Redefining Web Development with Precision & Passion.
      </h2>

      {/* Bouncing Profile Picture */}
      <motion.img
        src="/Profile.png" // Change this to your actual image path
        alt="Joel Adelugba"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full mt-8 shadow-lg"
        animate={{ y: [0, -10, 0] }} // Bouncing animation
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Hero;
