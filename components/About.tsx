import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const sentence = "TEENCON is not just a conference. It is a festival of ideas, a celebration of voice, and a launchpad for the changemakers of tomorrow. From MUNs to Marathons, we are redefining youth leadership.";
  
  const words = sentence.split(" ");

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/600/800" 
              alt="Youth Speaking" 
              className="rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_#A855F7] object-cover h-[500px] w-full transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#A855F7] text-white p-6 rounded-full font-bold text-xl border-4 border-black animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Since 2021
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold uppercase tracking-widest text-purple-600 mb-4"
          >
            Who We Are
          </motion.h2>
          
          <div className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 flex flex-wrap gap-x-3 gap-y-1">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ margin: "-50px" }}
                className={
                  word.includes("festival") ? "text-[#FF4081]" : 
                  word.includes("changemakers") ? "text-[#00E5FF] px-2 bg-black rounded-lg transform -skew-x-12 inline-block" : 
                  ""
                }
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-lg text-gray-600 font-medium"
          >
            We believe that age is no barrier to impact. Through our multidisciplinary events, we provide the stage. You bring the storm.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
