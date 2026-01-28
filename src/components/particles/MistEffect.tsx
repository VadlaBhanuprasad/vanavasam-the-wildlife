import { motion } from 'framer-motion';

const MistEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Bottom mist layer - darker dramatic */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40vh]"
        style={{
          background: 'linear-gradient(to top, hsla(180, 100%, 50%, 0.05), transparent)',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating mist clouds with neon tint */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300 + Math.random() * 200,
            height: 100 + Math.random() * 100,
            background: i % 2 === 0 
              ? 'hsla(180, 100%, 50%, 0.03)' 
              : 'hsla(280, 100%, 60%, 0.02)',
            bottom: `${10 + i * 10}%`,
            left: `${-20 + Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}

      {/* Top ambient glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh]"
        style={{
          background: 'radial-gradient(ellipse at top, hsla(220, 20%, 10%, 0.8), transparent 70%)',
        }}
      />
    </div>
  );
};

export default MistEffect;
