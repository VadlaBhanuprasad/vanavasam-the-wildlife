import { useEffect, useState } from 'react';
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
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
      size: Math.random() * 12 + 8,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setLeaves(particles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-neon-green/30"
          style={{
            left: `${leaf.x}%`,
            top: -20,
            fontSize: leaf.size,
            opacity: leaf.opacity,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(leaf.id) * 100, 0],
            rotate: [leaf.rotation, leaf.rotation + 720],
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
