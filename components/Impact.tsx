import React from 'react';
import { motion } from 'framer-motion';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { label: 'Participants', value: '15000', suffix: '+' },
  { label: 'Cities', value: '25', suffix: '' },
  { label: 'Schools', value: '120', suffix: '+' },
  { label: 'Impact', value: 'Infinite', suffix: '' },
];

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-[#111] text-white overflow-hidden relative">
      {/* Dynamic Stripes Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
           <div key={i} className="h-full w-2 bg-white absolute top-0 transform skew-x-12" style={{ left: `${i * 20}%` }}></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
            Our Reach
          </h2>
          <p className="mt-4 text-gray-400">Numbers that speak louder than words.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <div className="text-4xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 text-yellow-300">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm md:text-lg font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
