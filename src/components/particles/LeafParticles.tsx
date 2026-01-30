import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

const LeafParticles = () => {
  const leaves = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 15 + 20,
      size: Math.random() * 10 + 8,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.15,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5 will-change-transform">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-neon-green/20"
          style={{
            left: `${leaf.x}%`,
            top: -20,
            fontSize: leaf.size,
            opacity: leaf.opacity,
            willChange: 'transform',
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [leaf.rotation, leaf.rotation + 360],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'linear',
          }}
        >
          🍃
        </motion.div>
      ))}
    </div>
  );
};

export default LeafParticles;
