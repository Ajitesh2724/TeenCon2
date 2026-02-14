import React from 'react';
import { motion } from 'framer-motion';
import Sticker from './ui/Sticker';

const CTA: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#FF4081] overflow-hidden flex items-center justify-center">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-400 to-[#FF4081]"></div>
      <Sticker type="circle" color="white" className="absolute top-10 left-20 w-10 h-10 opacity-50" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 leading-none drop-shadow-md"
        >
          DON'T JUST WATCH.<br/>
          <span className="text-[#FFEB3B]">MAKE HISTORY.</span>
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white font-medium mb-10 max-w-2xl mx-auto"
        >
          The next chapter of your journey starts at TEENCON. Are you ready to take the mic?
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-white text-[#FF4081] text-2xl font-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] transition-all"
        >
          REGISTER NOW
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;