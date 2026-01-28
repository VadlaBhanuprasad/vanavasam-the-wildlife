import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Tent, Mountain, Droplets, AlertTriangle, Navigation, TreePine } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MapLocation {
  id: string;
  name: string;
  type: 'camp' | 'temple' | 'waterfall' | 'viewpoint' | 'emergency' | 'trail';
  x: number;
  y: number;
  description: string;
}

const locations: MapLocation[] = [
  { id: '1', name: 'Base Camp', type: 'camp', x: 20, y: 40, description: 'Main accommodation area with eco-lodges' },
  { id: '2', name: 'Ancient Temple', type: 'temple', x: 65, y: 25, description: 'Sacred temple dating back 800 years' },
  { id: '3', name: 'Silver Falls', type: 'waterfall', x: 80, y: 55, description: 'Majestic 150ft waterfall' },
  { id: '4', name: 'Eagle Point', type: 'viewpoint', x: 45, y: 15, description: 'Panoramic forest views' },
  { id: '5', name: 'Emergency Station', type: 'emergency', x: 35, y: 70, description: '24/7 rescue & medical aid' },
  { id: '6', name: 'Forest Trail Head', type: 'trail', x: 25, y: 55, description: 'Start of 12km nature trail' },
  { id: '7', name: 'Elephant Crossing', type: 'viewpoint', x: 55, y: 45, description: 'Wildlife observation point' },
  { id: '8', name: 'Tribal Village', type: 'camp', x: 75, y: 75, description: 'Indigenous community experience' },
];

const getIcon = (type: MapLocation['type']) => {
  const icons = {
    camp: Tent,
    temple: Mountain,
    waterfall: Droplets,
    viewpoint: Navigation,
    emergency: AlertTriangle,
    trail: TreePine,
  };
  return icons[type];
};

const getColor = (type: MapLocation['type']) => {
  const colors = {
    camp: 'text-neon-green bg-neon-green/20',
    temple: 'text-temple-gold bg-temple-gold/20',
    waterfall: 'text-water-stream bg-water-stream/20',
    viewpoint: 'text-primary bg-primary/20',
    emergency: 'text-destructive bg-destructive/20',
    trail: 'text-forest-fern bg-forest-fern/20',
  };
  return colors[type];
};

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredLocations = filter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === filter);

  const filters = [
    { id: 'all', label: 'All', icon: MapPin },
    { id: 'camp', label: 'Camps', icon: Tent },
    { id: 'temple', label: 'Temples', icon: Mountain },
    { id: 'waterfall', label: 'Waterfalls', icon: Droplets },
    { id: 'viewpoint', label: 'Viewpoints', icon: Navigation },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-2 block">
            Explore
          </span>
          <h2 className="text-display text-4xl md:text-5xl mb-4">
            Interactive <span className="text-accent">Trail Map</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navigate trails, locate experiences, and find emergency stations.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all",
                filter === f.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsla(180,100%,50%,0.3)]"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              )}
            >
              <f.icon className="w-4 h-4" />
              {f.label}
            </button>
          ))}
        </div>

        {/* Map Container */}
        <motion.div
          className="relative glass-neon rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Map Background */}
          <div 
            className="relative w-full aspect-[16/9] md:aspect-[21/9]"
            style={{
              background: 'linear-gradient(135deg, hsl(200, 30%, 8%) 0%, hsl(180, 40%, 10%) 50%, hsl(160, 30%, 12%) 100%)',
            }}
          >
            {/* Grid overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(hsl(180, 100%, 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180, 100%, 50%) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />

            {/* Terrain Features */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* River */}
              <path
                d="M0,80 Q30,75 50,60 T100,40"
                fill="none"
                stroke="hsl(195, 70%, 40%)"
                strokeWidth="0.5"
                opacity="0.6"
              />
              {/* Trail paths */}
              <path
                d="M20,40 Q35,50 45,15"
                fill="none"
                stroke="hsl(30, 50%, 40%)"
                strokeWidth="0.3"
                strokeDasharray="2,2"
                opacity="0.8"
              />
              <path
                d="M20,55 Q50,50 80,55"
                fill="none"
                stroke="hsl(30, 50%, 40%)"
                strokeWidth="0.3"
                strokeDasharray="2,2"
                opacity="0.8"
              />
            </svg>

            {/* Location Markers */}
            {filteredLocations.map((location, index) => {
              const Icon = getIcon(location.type);
              return (
                <motion.button
                  key={location.id}
                  className={cn(
                    "absolute transform -translate-x-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full transition-all",
                    getColor(location.type),
                    selectedLocation?.id === location.id && "ring-2 ring-foreground scale-125"
                  )}
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedLocation(location)}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              );
            })}

            {/* Selected Location Info */}
            {selectedLocation && (
              <motion.div
                className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 glass-neon p-4 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start gap-3">
                  <div className={cn("p-2 rounded-lg", getColor(selectedLocation.type))}>
                    {(() => {
                      const Icon = getIcon(selectedLocation.type);
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-display text-lg">{selectedLocation.name}</h4>
                    <p className="text-sm text-muted-foreground">{selectedLocation.description}</p>
                    <button className="mt-2 text-xs text-primary hover:underline">
                      Get Directions →
                    </button>
                  </div>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Legend */}
          <div className="p-4 border-t border-border flex flex-wrap gap-4 justify-center text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-water-stream rounded" />
              <span className="text-muted-foreground">River</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-earth-clay rounded border-dashed" style={{ borderTop: '2px dashed' }} />
              <span className="text-muted-foreground">Trail</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveMap;
