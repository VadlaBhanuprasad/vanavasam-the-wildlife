import { motion } from 'framer-motion';
import { Music, Flame, Drumstick, Heart, Calendar, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';
import tribalDance from '@/assets/tribal-dance.jpg';
import tribalFireDance from '@/assets/tribal-fire-dance.jpg';
import templeNight from '@/assets/temple-night.jpg';
import campfire from '@/assets/campfire.jpg';

const culturalEvents = [
  {
    id: 1,
    title: 'Fire Dance Ceremony',
    time: 'Every Evening, 8:00 PM',
    location: 'Central Amphitheater',
    image: tribalFireDance,
    description: 'Ancient fire dancing rituals passed down through generations. Watch as performers weave through flames in mesmerizing patterns.',
    icon: Flame,
  },
  {
    id: 2,
    title: 'Tribal Drum Circle',
    time: 'Fridays & Saturdays, 7:00 PM',
    location: 'Riverside Clearing',
    image: tribalDance,
    description: 'Join the rhythm of ancestral drums. Feel the pulse of the forest as tribal musicians create hypnotic soundscapes.',
    icon: Music,
  },
  {
    id: 3,
    title: 'Temple Blessing',
    time: 'Daily at Dawn, 5:30 AM',
    location: 'Ancient Temple Ruins',
    image: templeNight,
    description: 'Start your day with a sacred blessing ceremony at the ancient forest temple. Experience spiritual tranquility.',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Storytelling Night',
    time: 'Every Night, 9:30 PM',
    location: 'Main Campfire',
    image: campfire,
    description: 'Gather around the fire for tales of forest legends, tribal history, and mystical adventures under the stars.',
    icon: Drumstick,
  },
];

const carouselImages = [
  { src: tribalFireDance, alt: 'Fire Dance', title: 'Fire Dance', subtitle: 'Ancient rituals under the stars' },
  { src: tribalDance, alt: 'Tribal Dance', title: 'Tribal Rhythms', subtitle: 'Traditional celebrations' },
  { src: templeNight, alt: 'Temple', title: 'Sacred Temples', subtitle: 'Spiritual ceremonies' },
  { src: campfire, alt: 'Campfire', title: 'Campfire Stories', subtitle: 'Tales of the forest' },
];

const CulturalSection = () => {
  return (
    <section id="culture" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-fire-ember/10 blur-[150px]" />
      
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
            className="text-fire-ember text-sm tracking-widest uppercase mb-4 block"
            style={{ textShadow: '0 0 20px hsla(25, 100%, 55%, 0.5)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Living Traditions
          </motion.span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Dance with the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fire-ember to-temple-gold">
              Flames
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in ancient traditions. Experience tribal dances, sacred ceremonies, 
            and cultural performances that have echoed through these forests for centuries.
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

        {/* Cultural Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {culturalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-neon hover:shadow-[0_0_40px_hsla(25,100%,55%,0.15)] transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background hidden sm:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent sm:hidden" />
                  
                  {/* Play Button Overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-fire-ember/80 backdrop-blur-sm flex items-center justify-center border-2 border-fire-ember">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-fire-ember/20 flex items-center justify-center border border-fire-ember/30">
                      <event.icon className="w-5 h-5 text-fire-ember" />
                    </div>
                    <div>
                      <h3 className="text-display text-xl group-hover:text-fire-ember transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-body text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-fire-ember" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Flame className="w-4 h-4 text-temple-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Button variant="golden" size="sm">
                    Reserve Seat
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={tribalFireDance}
              alt="Cultural Performance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-24 h-24 rounded-full bg-fire-ember flex items-center justify-center border-4 border-fire-ember/50 shadow-[0_0_60px_hsla(25,100%,55%,0.5)] cursor-pointer">
                  <Play className="w-10 h-10 text-foreground ml-2" />
                </div>
                <p className="text-display text-xl text-foreground">Watch Full Performance</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalSection;
