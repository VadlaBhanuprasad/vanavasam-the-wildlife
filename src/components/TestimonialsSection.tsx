import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    location: 'California, USA',
    avatar: 'SC',
    rating: 5,
    title: 'Life-changing experience',
    text: 'The night jungle safari was absolutely magical. Seeing bioluminescent fungi and hearing the forest come alive at night... it was like stepping into another world.',
    experience: 'Night Jungle Safari',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    location: 'London, UK',
    avatar: 'MJ',
    rating: 5,
    title: 'Beyond expectations',
    text: 'The treehouse stay exceeded every expectation. Waking up to mist rolling through the canopy, monkeys visiting our balcony... pure magic.',
    experience: 'Canopy Treehouse',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    avatar: 'PS',
    rating: 5,
    title: 'Spiritual awakening',
    text: 'The temple blessing ceremony at dawn was profoundly moving. The guides knowledge of local traditions and spirituality added so much depth to our journey.',
    experience: 'Temple Blessing',
  },
  {
    id: 4,
    name: 'Thomas Weber',
    location: 'Berlin, Germany',
    avatar: 'TW',
    rating: 5,
    title: 'Adventure of a lifetime',
    text: 'The summit trek was challenging but incredibly rewarding. Watching sunrise above the clouds made every step worth it. The guides were exceptional.',
    experience: 'Summit Trek',
  },
  {
    id: 5,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'ER',
    rating: 5,
    title: 'Cultural immersion',
    text: 'The fire dance ceremony left me speechless. The connection between the performers and the flames, the ancient rhythms... unforgettable.',
    experience: 'Fire Dance Ceremony',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-forest-deep/10 to-background" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
      
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
            className="text-accent text-sm tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Guest Stories
          </motion.span>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Voices from the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-temple-gold">
              Wilderness
            </span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Real experiences from travelers who discovered the magic of Vanavasam.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="relative h-full p-6 rounded-2xl glass-neon group hover:shadow-[0_0_40px_hsla(45,100%,50%,0.1)] transition-all duration-500">
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-temple-gold fill-temple-gold" />
                      ))}
                    </div>

                    {/* Title & Text */}
                    <h4 className="text-display text-lg mb-3 group-hover:text-accent transition-colors">
                      "{testimonial.title}"
                    </h4>
                    <p className="text-body text-sm text-muted-foreground mb-6 line-clamp-4">
                      {testimonial.text}
                    </p>

                    {/* Experience Tag */}
                    <div className="mb-6">
                      <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {testimonial.experience}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-temple-gold flex items-center justify-center text-foreground font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-display text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm border-accent/30 hover:border-accent hover:bg-accent/10" />
          <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm border-accent/30 hover:border-accent hover:bg-accent/10" />
        </Carousel>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9', label: 'Average Rating', suffix: '/5' },
            { value: '2,500+', label: 'Happy Guests', suffix: '' },
            { value: '98%', label: 'Would Recommend', suffix: '' },
            { value: '150+', label: 'Five Star Reviews', suffix: '' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl glass-neon"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-temple-gold">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
