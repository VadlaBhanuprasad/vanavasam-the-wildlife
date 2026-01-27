import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const FireflyParticles = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const generateFireflies = () => {
      const newFireflies: Firefly[] = [];
      for (let i = 0; i < 30; i++) {
        newFireflies.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 2 + Math.random() * 4,
          duration: 3 + Math.random() * 4,
        });
      }
      setFireflies(newFireflies);
    };
    generateFireflies();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          className="absolute rounded-full bg-temple-sacred"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            width: firefly.size,
            height: firefly.size,
            boxShadow: `0 0 ${firefly.size * 3}px hsl(45 85% 65%)`,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1, 0.5],
            x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: firefly.duration,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default FireflyParticles;
