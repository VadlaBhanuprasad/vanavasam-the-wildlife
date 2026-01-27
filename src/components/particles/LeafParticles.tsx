import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const LeafParticles = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves: Leaf[] = [];
      for (let i = 0; i < 20; i++) {
        newLeaves.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 10 + Math.random() * 10,
          size: 10 + Math.random() * 15,
          rotation: Math.random() * 360,
        });
      }
      setLeaves(newLeaves);
    };
    generateLeaves();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-forest-fern/40"
          style={{
            left: `${leaf.x}%`,
            fontSize: leaf.size,
          }}
          initial={{ y: -50, rotate: leaf.rotation, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(leaf.id) * 100, Math.cos(leaf.id) * 50, 0],
            rotate: [leaf.rotation, leaf.rotation + 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
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
