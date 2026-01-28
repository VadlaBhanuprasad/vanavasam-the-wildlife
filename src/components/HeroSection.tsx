import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Shield, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';
import forestHero from '@/assets/forest-hero.jpg';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <section ref={ref} className="relative min-h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y, scale }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${forestHero})` }}
          />
          {/* Dramatic dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/50" />
        </motion.div>

        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-neon-purple/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <motion.div 
          className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 max-w-4xl"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-neon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-body tracking-widest uppercase">
                Immersive Wilderness Experience
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-display text-5xl md:text-7xl lg:text-8xl leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <span className="block">Into the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-purple to-accent neon-text">
                Wild Unknown
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Venture into ancient jungles, mystical temples, and untamed wilderness. 
              Experience the raw beauty of nature with cinematic adventures.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {[
                { value: '50+', label: 'Experiences' },
                { value: '12K', label: 'Adventurers' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-display text-primary neon-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => setIsBookingOpen(true)}
                className="group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Book Now
              </Button>
              <Button variant="neon" size="xl" className="gap-2">
                <Shield className="w-5 h-5" />
                Emergency SOS
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs tracking-widest uppercase">Explore</span>
              <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default HeroSection;
