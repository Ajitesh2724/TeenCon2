import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  "Brand A", "StartUp X", "Tech Giant", "BevCo", "MediaHouse", "UniGlobal", "FutureLabs", "GreenEnergy"
];

const Sponsors: React.FC = () => {
  return (
    <section className="py-16 border-t border-b border-gray-200 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <span className="uppercase text-xs font-bold tracking-[0.2em] text-gray-400">Our Partners</span>
      </div>
      
      <div className="flex">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, i) => (
            <div key={i} className="text-3xl md:text-4xl font-black text-gray-300 uppercase hover:text-black transition-colors cursor-default">
              {sponsor}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
