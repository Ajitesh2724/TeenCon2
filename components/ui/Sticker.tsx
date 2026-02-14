import React from 'react';
import { motion, Variants } from 'framer-motion';

type StickerType = 'star' | 'burst' | 'squiggle' | 'lightning' | 'circle';

interface StickerProps {
  type: StickerType;
  className?: string;
  color?: string;
  delay?: number;
  rotate?: boolean;
}

const Sticker: React.FC<StickerProps> = ({ type, className = '', color = 'currentColor', delay = 0, rotate = false }) => {
  const variants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring' as const, 
        stiffness: 200, 
        damping: 10, 
        delay 
      }
    },
    hover: { 
      scale: 1.1, 
      rotate: rotate ? 15 : 0,
      transition: { type: 'spring' as const, stiffness: 400 }
    }
  };

  const renderShape = () => {
    switch (type) {
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
          </svg>
        );
      case 'burst':
        return (
          <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.5 9L23 5L17 12L23 19L14.5 15L12 24L9.5 15L0 19L6 12L0 5L9.5 9L12 0Z" />
          </svg>
        );
      case 'lightning':
        return (
          <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
          </svg>
        );
      case 'squiggle':
        return (
          <svg viewBox="0 0 100 30" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round">
            <path d="M5 15C15 5 25 25 35 15C45 5 55 25 65 15C75 5 85 25 95 15" />
          </svg>
        );
      case 'circle':
        return (
           <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
             <circle cx="12" cy="12" r="10" />
           </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`absolute ${className}`}
      variants={variants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {renderShape()}
    </motion.div>
  );
};

export default Sticker;