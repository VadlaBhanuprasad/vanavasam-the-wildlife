import { motion } from 'framer-motion';
import { Camera, Instagram, Share2 } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import forestHero from '@/assets/forest-hero.jpg';
import nightJungle from '@/assets/night-jungle.jpg';
import waterfall from '@/assets/waterfall.jpg';
import templeNight from '@/assets/temple-night.jpg';
import tribalDance from '@/assets/tribal-dance.jpg';
import campfire from '@/assets/campfire.jpg';
import ecoLodge from '@/assets/eco-lodge.jpg';
import mountainClimb from '@/assets/mountain-climb.jpg';
import zipline from '@/assets/zipline.jpg';
import kayaking from '@/assets/kayaking.jpg';
import tribalFireDance from '@/assets/tribal-fire-dance.jpg';
import resortInterior from '@/assets/resort-interior.jpg';

const galleryImages = [
  { src: forestHero, alt: 'Misty Forest', title: 'Morning Mist', subtitle: 'First light through the canopy' },
  { src: nightJungle, alt: 'Night Jungle', title: 'Nocturnal Magic', subtitle: 'When the jungle awakens' },
  { src: waterfall, alt: 'Waterfall', title: 'Hidden Falls', subtitle: 'Nature\'s symphony' },
  { src: mountainClimb, alt: 'Mountain', title: 'Summit Views', subtitle: 'Above the clouds' },
  { src: zipline, alt: 'Zipline', title: 'Canopy Flight', subtitle: 'Soaring through green' },
  { src: kayaking, alt: 'Kayaking', title: 'River Journey', subtitle: 'Paddling into sunset' },
  { src: tribalFireDance, alt: 'Fire Dance', title: 'Fire Ritual', subtitle: 'Ancient traditions' },
  { src: templeNight, alt: 'Temple', title: 'Sacred Grounds', subtitle: 'Spiritual sanctuary' },
  { src: tribalDance, alt: 'Tribal Dance', title: 'Cultural Heritage', subtitle: 'Living traditions' },
  { src: ecoLodge, alt: 'Eco Lodge', title: 'Forest Retreat', subtitle: 'Luxury in nature' },
  { src: resortInterior, alt: 'Resort', title: 'Jungle Suite', subtitle: 'Wake up to wilderness' },
  { src: campfire, alt: 'Campfire', title: 'Campfire Tales', subtitle: 'Stories under stars' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-forest-deep/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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
            Visual Journey
          </motion.span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Captured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-purple">
              Moments
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Every photograph tells a story. Explore the breathtaking beauty of our 
            forest sanctuary through the lenses of adventurers past.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <ImageCarousel images={galleryImages.slice(0, 6)} aspectRatio="video" />
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-square overflow-hidden ${index % 5 === 0 ? 'aspect-square' : ''}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h4 className="text-display text-lg text-primary mb-1">{image.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{image.subtitle}</p>
                  <div className="flex justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30"
                    >
                      <Camera className="w-4 h-4 text-primary" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30"
                    >
                      <Share2 className="w-4 h-4 text-primary" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Neon Border */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/50 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-neon border border-primary/30 hover:border-primary transition-all group"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-foreground group-hover:text-primary transition-colors">
              Follow @Vanavasam on Instagram
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
