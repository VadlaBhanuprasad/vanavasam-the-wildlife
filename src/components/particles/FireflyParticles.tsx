import { useEffect, useState } from 'react';
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
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(180, 100%, 50%)', // Cyan
      'hsl(280, 100%, 60%)', // Purple
      'hsl(45, 100%, 50%)', // Gold
      'hsl(150, 100%, 45%)', // Green
    ];

    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setFireflies(particles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
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
            boxShadow: `0 0 ${firefly.size * 4}px ${firefly.color}, 0 0 ${firefly.size * 8}px ${firefly.color}`,
          }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
            x: [0, Math.random() * 40 - 20, Math.random() * 30 - 15, 0],
            y: [0, Math.random() * -40, Math.random() * -30, 0],
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
