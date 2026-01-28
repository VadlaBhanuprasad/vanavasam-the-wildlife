import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Music, Utensils, Calendar } from 'lucide-react';
import campfireImage from '@/assets/campfire.jpg';

const features = [
  {
    icon: Users,
    title: 'Community Gatherings',
    description: 'Share stories around the fire with fellow travelers',
  },
  {
    icon: Music,
    title: 'Traditional Music',
    description: 'Live tribal performances under the stars',
  },
  {
    icon: Utensils,
    title: 'Forest Cuisine',
    description: 'Savor local dishes cooked over open flames',
  },
];

const CampfireSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${campfireImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </motion.div>

      {/* Fire Glow Effect - Neon style */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, hsla(25, 100%, 55%, 0.3) 0%, hsla(15, 100%, 50%, 0.1) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent text-sm tracking-widest uppercase neon-text">
                Evening Rituals
              </span>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
                Gather Around the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-fire-glow">
                  Sacred Fire
                </span>
              </h2>
              <p className="text-body text-muted-foreground text-lg max-w-xl">
                As darkness embraces the forest, the campfire becomes the heart of our community. 
                Share tales of adventure, feast on traditional cuisine, and witness the magic of tribal performances.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl glass-neon"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 border border-accent/30">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-display text-lg text-foreground">{feature.title}</h4>
                    <p className="text-body text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="golden" size="lg" className="gap-2">
              <Calendar className="w-5 h-5" />
              Reserve Your Spot
            </Button>
          </motion.div>

          {/* Right - Empty for background visibility on mobile */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default CampfireSection;
