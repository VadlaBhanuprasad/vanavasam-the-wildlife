import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
  showCaptions?: boolean;
  aspectRatio?: 'video' | 'square' | 'wide';
}

const ImageCarousel = ({ 
  images, 
  className, 
  showCaptions = true,
  aspectRatio = 'video' 
}: ImageCarouselProps) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
  };

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className={cn('w-full', className)}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className={cn(aspectClasses[aspectRatio], 'relative overflow-hidden')}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Neon border on hover */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_30px_hsla(180,100%,50%,0.2)]" />
              </div>
              
              {showCaptions && (image.title || image.subtitle) && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {image.title && (
                    <h4 className="text-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                      {image.title}
                    </h4>
                  )}
                  {image.subtitle && (
                    <p className="text-body text-sm text-muted-foreground mt-1 line-clamp-2">
                      {image.subtitle}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/10" />
      <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/10" />
    </Carousel>
  );
};

export default ImageCarousel;
