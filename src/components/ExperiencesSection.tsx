import { motion } from 'framer-motion';
import { Tent, Moon, Bird, Droplets, Mountain, Flame } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import nightJungle from '@/assets/night-jungle.jpg';
import waterfall from '@/assets/waterfall.jpg';
import templeNight from '@/assets/temple-night.jpg';
import tribalDance from '@/assets/tribal-dance.jpg';
import forestHero from '@/assets/forest-hero.jpg';

const experiences = [
  {
    title: 'Forest Stays',
    description: 'Sleep under ancient canopies in eco-lodges crafted from natural materials. Wake to birdsong and mist.',
    image: forestHero,
    icon: Tent,
  },
  {
    title: 'Night Jungle',
    description: 'Venture into the darkness with expert guides. Discover nocturnal wildlife and bioluminescent wonders.',
    image: nightJungle,
    icon: Moon,
  },
  {
    title: 'Wildlife Safari',
    description: 'Track majestic creatures through pristine wilderness. Tigers, elephants, and rare bird species await.',
    image: forestHero,
    icon: Bird,
  },
  {
    title: 'Waterfalls',
    description: 'Discover hidden cascades and natural pools. Swim in crystal waters surrounded by virgin forest.',
    image: waterfall,
    icon: Droplets,
  },
  {
    title: 'Sacred Temples',
    description: 'Visit ancient temples hidden in the jungle. Experience spiritual ceremonies and timeless traditions.',
    image: templeNight,
    icon: Mountain,
  },
  {
    title: 'Tribal Culture',
    description: 'Connect with indigenous communities. Witness traditional dances and learn ancestral wisdom.',
    image: tribalDance,
    icon: Flame,
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      
      {/* Section Header */}
      <motion.div 
        className="max-w-7xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          className="text-primary text-sm tracking-widest uppercase mb-4 block neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Curated Adventures
        </motion.span>
        <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
          Unforgettable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-purple">Experiences</span>
        </h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Each journey is crafted to awaken your senses, challenge your spirit, 
          and create memories that last a lifetime.
        </p>
      </motion.div>

      {/* Experience Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            {...experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
