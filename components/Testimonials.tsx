import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Dr. Anjali Mehta",
    role: "Educationist",
    quote: "TEENCON creates a safe space for radical creativity. It's exactly what our education system lacks.",
    image: "https://picsum.photos/seed/anjali/100/100"
  },
  {
    name: "Rahul Verma",
    role: "Social Entrepreneur",
    quote: "The energy at these events is infectious. I saw future CEOs and Prime Ministers in that room.",
    image: "https://picsum.photos/seed/rahul/100/100"
  },
  {
    name: "Sarah Jenkins",
    role: "Intl. Debate Coach",
    quote: "Professionalism meets pure, unadulterated youth passion. Highly recommended.",
    image: "https://picsum.photos/seed/sarah/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Icons Who Believe in Us</h2>
          <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-yellow-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic font-medium leading-relaxed">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
