import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const FireflyParticles = () => {
  const fireflies = useMemo(() => {
    const colors = [
      'hsl(180, 100%, 50%)',
      'hsl(280, 100%, 60%)',
      'hsl(45, 100%, 50%)',
      'hsl(150, 100%, 45%)',
    ];

    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 will-change-transform">
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          className="absolute rounded-full"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            width: firefly.size,
            height: firefly.size,
            backgroundColor: firefly.color,
            boxShadow: `0 0 ${firefly.size * 3}px ${firefly.color}`,
            willChange: 'transform, opacity',
          }}
          animate={{
            opacity: [0, 0.8, 0.4, 0.8, 0],
            scale: [0.8, 1.1, 0.9, 1, 0.8],
          }}
          transition={{
            duration: firefly.duration,
            repeat: Infinity,
            delay: firefly.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FireflyParticles;
