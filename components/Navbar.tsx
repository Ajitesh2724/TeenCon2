import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto bg-white/80 backdrop-blur-md border border-white/20 shadow-lg px-6 py-3 rounded-full flex items-center gap-8">
        <span className="font-black text-xl tracking-tight">TEENCON</span>
        <ul className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-wide">
          <li className="hover:text-[#FF4081] cursor-pointer transition-colors">About</li>
          <li className="hover:text-[#00E5FF] cursor-pointer transition-colors">Events</li>
          <li className="hover:text-yellow-500 cursor-pointer transition-colors">Impact</li>
          <li className="hover:text-purple-500 cursor-pointer transition-colors">Partners</li>
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#FF4081] transition-colors">
          Join
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;