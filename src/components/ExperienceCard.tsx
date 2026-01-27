import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  index: number;
}

const ExperienceCard = ({ title, description, image, icon: Icon, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="space-y-3"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl glass-forest flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-temple-gold" />
          </div>
          
          {/* Title */}
          <h3 className="text-display text-2xl md:text-3xl text-foreground">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-body text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
            {description}
          </p>
          
          {/* Explore Link */}
          <motion.span 
            className="inline-flex items-center gap-2 text-temple-gold text-sm font-medium pt-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            Explore Experience →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
