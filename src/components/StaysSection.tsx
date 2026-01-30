import { motion } from 'framer-motion';
import { Star, Wifi, Coffee, TreePine, Mountain, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ImageCarousel from './ImageCarousel';
import ecoLodge from '@/assets/eco-lodge.jpg';
import resortInterior from '@/assets/resort-interior.jpg';
import forestHero from '@/assets/forest-hero.jpg';
import campfire from '@/assets/campfire.jpg';

const stays = [
  {
    name: 'Canopy Treehouse',
    type: 'Luxury Treehouse',
    price: '₹23,000',
    rating: 4.9,
    reviews: 128,
    image: ecoLodge,
    amenities: ['Free WiFi', 'Forest View', 'Private Deck'],
    description: 'Elevated luxury among ancient trees with panoramic jungle views.',
  },
  {
    name: 'Jungle Villa',
    type: 'Private Villa',
    price: '₹35,000',
    rating: 5.0,
    reviews: 89,
    image: resortInterior,
    amenities: ['Pool', 'Butler Service', 'Spa'],
    description: 'Ultimate privacy with personal infinity pool overlooking the valley.',
  },
  {
    name: 'Safari Lodge',
    type: 'Eco Lodge',
    price: '₹15,000',
    rating: 4.8,
    reviews: 256,
    image: forestHero,
    amenities: ['Wildlife Access', 'Guide', 'Meals'],
    description: 'Authentic bush experience with expert wildlife guides.',
  },
  {
    name: 'Riverside Camp',
    type: 'Glamping',
    price: '₹9,500',
    rating: 4.7,
    reviews: 312,
    image: campfire,
    amenities: ['Campfire', 'Kayaks', 'Stargazing'],
    description: 'Luxury camping by the river under a blanket of stars.',
  },
];

const carouselImages = [
  { src: ecoLodge, alt: 'Eco Lodge', title: 'Treehouse Retreat', subtitle: 'Sleep among the treetops' },
  { src: resortInterior, alt: 'Resort Interior', title: 'Jungle Luxury', subtitle: 'Modern comfort in nature' },
  { src: forestHero, alt: 'Forest View', title: 'Safari Lodge', subtitle: 'Wildlife at your doorstep' },
  { src: campfire, alt: 'Campfire', title: 'Glamping Experience', subtitle: 'Stars above, nature around' },
];

const StaysSection = () => {
  return (
    <section id="stays" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px]" />
      
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
            className="text-accent text-sm tracking-widest uppercase mb-4 block neon-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Forest Accommodations
          </motion.span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Where Nature Meets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-temple-gold">
              Luxury
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From treehouse retreats to riverside glamping, find your perfect sanctuary 
            in the heart of the wilderness.
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

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stays.map((stay, index) => (
            <motion.div
              key={stay.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsla(180,100%,50%,0.1)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-temple-gold fill-temple-gold" />
                    <span className="text-xs font-medium">{stay.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-display text-lg group-hover:text-primary transition-colors">
                        {stay.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{stay.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-accent">{stay.price}</span>
                      <span className="text-xs text-muted-foreground">/night</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {stay.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {stay.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <Button variant="neon" size="sm" className="w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaysSection;
