import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Sticker from './ui/Sticker';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#2D004E]">
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="Screenshot 2026-02-14 172546.png" 
          alt="Teencon Community" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for text readability without hiding characters completely */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Floating Elements */}
      <motion.div style={{ y: y2, rotate }} className="absolute bottom-32 right-10 md:right-32 z-10">
        <Sticker type="burst" color="#00E5FF" className="w-20 h-20 md:w-32 md:h-32 opacity-90" delay={0.4} />
      </motion.div>
      <Sticker type="squiggle" color="#FFEB3B" className="absolute top-1/2 right-[10%] w-32 h-12 hidden md:block opacity-90" delay={0.6} />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block py-2 px-6 bg-[#FF4081]/90 backdrop-blur-sm text-white border-2 border-white rounded-full font-bold text-lg md:text-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform -rotate-2">
            🚀 The Youth Revolution
          </span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
          className="font-black text-[15vw] leading-[0.8] tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        >
          TEENCON
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-xl md:text-3xl font-medium max-w-3xl text-gray-100 drop-shadow-md bg-black/20 p-2 rounded-xl backdrop-blur-sm"
        >
          Empowering the <span className="text-[#00E5FF] font-bold">Next Generation</span> of Leaders through creativity, voice, and action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-4"
        >
          <button className="px-8 py-4 bg-white text-black text-xl font-bold rounded-full hover:bg-[#00E5FF] hover:text-white hover:scale-105 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none border-2 border-transparent">
            Join the Movement
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-20 drop-shadow-md"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;