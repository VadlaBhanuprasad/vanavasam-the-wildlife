import { motion } from 'framer-motion';
import { useMemo } from 'react';

const MistEffect = () => {
  const mistClouds = useMemo(() => 
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      width: 300 + i * 100,
      height: 80 + i * 20,
      bottom: 15 + i * 15,
      left: -10 + i * 30,
      isAlt: i % 2 === 0,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5 will-change-transform">
      {/* Bottom mist layer */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[30vh]"
        style={{
          background: 'linear-gradient(to top, hsla(180, 100%, 50%, 0.03), transparent)',
          willChange: 'opacity',
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating mist clouds */}
      {mistClouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: cloud.width,
            height: cloud.height,
            background: cloud.isAlt 
              ? 'hsla(180, 100%, 50%, 0.02)' 
              : 'hsla(280, 100%, 60%, 0.015)',
            bottom: `${cloud.bottom}%`,
            left: `${cloud.left}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, 80, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 25 + cloud.id * 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: cloud.id * 3,
          }}
        />
      ))}

      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[40vh]"
        style={{
          background: 'radial-gradient(ellipse at top, hsla(220, 20%, 10%, 0.6), transparent 70%)',
        }}
      />
    </div>
  );
};

export default MistEffect;
