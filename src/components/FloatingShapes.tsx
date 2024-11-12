import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', color: 'bg-primary/10' },
  { type: 'square', color: 'bg-secondary/10' },
  { type: 'triangle', color: 'bg-blue-500/10' },
  { type: 'donut', color: 'bg-purple-500/10' }
];

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} backdrop-blur-sm`}
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            borderRadius: shape.type === 'circle' ? '50%' : 
                        shape.type === 'triangle' ? '0' : 
                        shape.type === 'donut' ? '50%' : '10%',
            border: shape.type === 'donut' ? '10px solid rgba(255,255,255,0.1)' : 'none',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
            scale: [1, Math.random() + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
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