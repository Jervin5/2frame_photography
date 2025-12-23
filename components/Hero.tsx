// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const heroImages = [
//   "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", // Wedding/Couple
//   "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop", // Baby
//   "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop", // Family
// ];

// export const Hero: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//       {/* Background Slideshow */}
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <div className="absolute inset-0 bg-black/40 z-10" />
//           <img
//             src={heroImages[index]}
//             alt="Hero Background"
//             className="w-full h-full object-cover object-center"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content */}
//       <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
//         <motion.span
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="inline-block py-1 px-3 mb-4 border border-white/30 rounded-full text-white/80 text-sm tracking-widest uppercase backdrop-blur-sm"
//         >
//           Coimbatore's Finest
//         </motion.span>
//         <motion.h1
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.7, duration: 0.8 }}
//           className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
//         >
//           Capturing Life’s <br />
//           <span className="text-rose-200 italic">Precious Moments</span>
//         </motion.h1>
//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.9, duration: 0.8 }}
//           className="text-lg md:text-xl text-white/90 mb-8 font-light tracking-wide"
//         >
//           Babyshoot • Maternity • Marriage • Outdoor • Family Functions
//         </motion.p>
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1.1 }}
//         >
//           <a
//             href="#contact"
//             className="group inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-rose-500/30"
//           >
//             Book Your Shoot
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
//       >
//         <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
//       </motion.div>
//     </section>
//   );
// };
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import home from "../images/IMG_1407.MOV";

const heroVideo = home;

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* ===== Background Horizontal Video ===== */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ===== Hero Content ===== */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-block py-1 px-4 mb-5 border border-white/30 rounded-full text-white/80 text-sm tracking-widest uppercase backdrop-blur-sm"
        >
          Coimbatore&apos;s Finest
        </motion.span>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
        >
          Capturing Life’s <br />
          <span className="text-rose-200 italic">
            Precious Moments
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide"
        >
          Baby Shoot • Maternity • Marriage • Outdoor • Family Functions
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-rose-500/40"
          >
            Book Your Shoot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
