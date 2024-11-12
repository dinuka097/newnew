import React from 'react';
import { motion } from 'framer-motion';

const shapes = Array(8).fill(null).map(() => ({
  type: ['circle', 'square', 'triangle', 'donut'][Math.floor(Math.random() * 4)],
  color: [
    'bg-primary/5',
    'bg-secondary/5',
    'bg-blue-500/5',
    'bg-purple-500/5'
  ][Math.floor(Math.random() * 4)],
  size: Math.random() * 100 + 50,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5
}));

const FloatingShapes = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} backdrop-blur-sm`}
          style={{
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : 
                        shape.type === 'triangle' ? '0' : 
                        shape.type === 'donut' ? '50%' : '10%',
            border: shape.type === 'donut' ? '10px solid rgba(255,255,255,0.1)' : 'none',
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
            scale: [1, Math.random() + 0.5, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;