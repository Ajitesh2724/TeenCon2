import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { EventItem } from '../types';

const events: EventItem[] = [
  {
    id: '1',
    title: 'National MUN',
    description: 'Debate global policies with the brightest minds.',
    category: 'MUN',
    image: 'https://picsum.photos/seed/mun/400/600',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Youth Talks',
    description: 'Stories that inspire, ideas that ignite.',
    category: 'Talk Show',
    image: 'https://picsum.photos/seed/talks/400/600',
    color: 'bg-pink-500'
  },
  {
    id: '3',
    title: 'FitRun 2024',
    description: 'Running for a cause. Sweat for change.',
    category: 'Run',
    image: 'https://picsum.photos/seed/run/400/600',
    color: 'bg-green-500'
  },
  {
    id: '4',
    title: 'Creator Summit',
    description: 'Digital art, content creation, and media.',
    category: 'Conference',
    image: 'https://picsum.photos/seed/creator/400/600',
    color: 'bg-purple-500'
  },
   {
    id: '5',
    title: 'Policy Hackathon',
    description: 'Solve real-world civic problems in 24 hours.',
    category: 'Debate',
    image: 'https://picsum.photos/seed/hack/400/600',
    color: 'bg-orange-500'
  }
];

const EventCard: React.FC<{ event: EventItem; index: number }> = ({ event, index }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-80 md:w-96 relative group cursor-pointer"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className={`absolute inset-0 ${event.color} rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border-2 border-black`}></div>
      <div className="relative bg-white border-2 border-black rounded-3xl overflow-hidden h-[500px] flex flex-col">
        <div className="h-3/5 overflow-hidden border-b-2 border-black relative">
            <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-full text-xs font-bold z-10 uppercase">
                {event.category}
            </div>
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="h-2/5 p-6 flex flex-col justify-between bg-white">
            <div>
                <h3 className="text-3xl font-bold leading-none mb-2">{event.title}</h3>
                <p className="text-gray-600 font-medium leading-tight">{event.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="font-bold underline">Learn More</span>
                <div className={`w-8 h-8 rounded-full ${event.color} border border-black flex items-center justify-center`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-[#E0F2F1] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex items-end justify-between">
        <div>
            <h2 className="text-5xl md:text-7xl font-black text-black">
            WHAT'S <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">HAPPENING?</span>
            </h2>
        </div>
        <div className="hidden md:block">
            <p className="text-xl font-medium max-w-xs text-right">Dive into a world of diverse opportunities designed for you.</p>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto px-4 md:px-12 py-10 no-scrollbar snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
        {/* Spacer for end of scroll */}
        <div className="w-12 flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default Events;