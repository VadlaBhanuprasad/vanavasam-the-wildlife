import { motion } from 'framer-motion';

const MistEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Bottom mist layer */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40vh]"
        style={{
          background: 'linear-gradient(to top, hsla(200, 30%, 85%, 0.15), transparent)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating mist clouds */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300 + Math.random() * 200,
            height: 100 + Math.random() * 100,
            background: 'hsla(200, 30%, 85%, 0.1)',
            bottom: `${10 + i * 10}%`,
            left: `${-20 + Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default MistEffect;
