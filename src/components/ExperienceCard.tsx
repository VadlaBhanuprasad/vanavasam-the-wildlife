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
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
      
      {/* Neon Border Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_30px_hsla(180,100%,50%,0.2)]" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          className="transform transition-all duration-500"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-primary/30 group-hover:shadow-[0_0_20px_hsla(180,100%,50%,0.3)] transition-all">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          
          {/* Title */}
          <h3 className="text-display text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {/* Description - appears on hover */}
          <p className="text-body text-sm text-muted-foreground line-clamp-3 opacity-70 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
          
          {/* Explore Link */}
          <motion.span 
            className="inline-flex items-center gap-2 mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Explore 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
