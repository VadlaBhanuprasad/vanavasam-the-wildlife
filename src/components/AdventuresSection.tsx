import { motion } from 'framer-motion';
import { Mountain, Compass, Timer, Users, Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';
import mountainClimb from '@/assets/mountain-climb.jpg';
import zipline from '@/assets/zipline.jpg';
import kayaking from '@/assets/kayaking.jpg';
import waterfall from '@/assets/waterfall.jpg';

const adventures = [
  {
    id: 1,
    title: 'Summit Trek',
    subtitle: 'Conquer the peaks',
    image: mountainClimb,
    duration: '8 hours',
    difficulty: 'Challenging',
    groupSize: '4-8',
    price: '₹12,500',
    description: 'Scale majestic peaks with expert mountaineers. Witness sunrise above the clouds and experience the thrill of reaching the summit.',
    highlights: ['Professional guides', 'Safety equipment', 'Sunrise views', 'Summit certificate'],
  },
  {
    id: 2,
    title: 'Canopy Zipline',
    subtitle: 'Fly through the forest',
    image: zipline,
    duration: '3 hours',
    difficulty: 'Moderate',
    groupSize: '2-10',
    price: '₹7,000',
    description: 'Soar through ancient canopies on thrilling zip lines. Experience the forest from a bird\'s perspective.',
    highlights: ['12 zip lines', 'Canopy walkway', 'Forest guides', 'Photo package'],
  },
  {
    id: 3,
    title: 'River Kayaking',
    subtitle: 'Navigate wild waters',
    image: kayaking,
    duration: '5 hours',
    difficulty: 'Moderate',
    groupSize: '2-6',
    price: '₹9,800',
    description: 'Paddle through pristine jungle rivers, discovering hidden waterfalls and exotic wildlife along the way.',
    highlights: ['Equipment provided', 'Picnic lunch', 'Wildlife spotting', 'Swimming stops'],
  },
  {
    id: 4,
    title: 'Waterfall Rappelling',
    subtitle: 'Descend the cascades',
    image: waterfall,
    duration: '6 hours',
    difficulty: 'Advanced',
    groupSize: '4-6',
    price: '₹14,800',
    description: 'Descend stunning waterfalls through rappelling and canyoning. An adrenaline-packed adventure in paradise.',
    highlights: ['Full equipment', 'Expert instructors', 'Multiple drops', 'Natural pools'],
  },
];

const carouselImages = adventures.map(adv => ({
  src: adv.image,
  alt: adv.title,
  title: adv.title,
  subtitle: adv.subtitle,
}));

const AdventuresSection = () => {
  return (
    <section id="adventures" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-[200px]" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="text-neon-green text-sm tracking-widest uppercase mb-4 block"
            style={{ textShadow: '0 0 20px hsla(150, 100%, 45%, 0.5)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Thrilling Expeditions
          </motion.span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Push Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-primary">
              Limits
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From mountain summits to rushing rivers, discover adventures that will 
            challenge your spirit and create lifelong memories.
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <ImageCarousel images={carouselImages} aspectRatio="video" />
        </motion.div>

        {/* Adventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-neon"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-display text-2xl group-hover:text-primary transition-colors">
                        {adventure.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{adventure.subtitle}</p>
                    </div>
                    <span className="text-2xl font-bold text-accent">{adventure.price}</span>
                  </div>

                  <p className="text-body text-sm text-muted-foreground mb-4 line-clamp-2">
                    {adventure.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Timer className="w-4 h-4 text-primary" />
                      <span>{adventure.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-4 h-4 text-accent" />
                      <span>{adventure.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-neon-green" />
                      <span>{adventure.groupSize} people</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {adventure.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Button variant="nature" className="gap-2">
                    Book Adventure
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventuresSection;
