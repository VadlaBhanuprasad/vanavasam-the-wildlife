import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Phone, X, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleSOS = () => {
    setIsOpen(true);
    setIsLocating(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLocating(false);
        },
        () => {
          setIsLocating(false);
        }
      );
    } else {
      setIsLocating(false);
    }
  };

  return (
    <>
      {/* Floating SOS Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-lg shadow-destructive/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSOS}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
        <AlertTriangle className="w-7 h-7 text-destructive-foreground relative z-10" />
      </motion.button>

      {/* SOS Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-md glass-neon rounded-2xl p-6 border-2 border-destructive/50"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Emergency Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-destructive/20 blur-xl" />
              
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-0 p-2 rounded-full hover:bg-foreground/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <h2 className="text-display text-2xl text-destructive">Emergency SOS</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    Help is on the way. Stay calm.
                  </p>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-muted/50 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Your Location</span>
                  </div>
                  {isLocating ? (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Detecting location...
                    </div>
                  ) : location ? (
                    <p className="text-xs text-muted-foreground font-mono">
                      {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Location unavailable
                    </p>
                  )}
                </div>

                {/* Emergency Numbers */}
                <div className="space-y-3">
                  <Button
                    variant="destructive"
                    className="w-full gap-2"
                    onClick={() => window.open('tel:112')}
                  >
                    <Phone className="w-4 h-4" />
                    Call Emergency (112)
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-destructive/50 hover:bg-destructive/10"
                    onClick={() => window.open('tel:+911234567890')}
                  >
                    <Phone className="w-4 h-4" />
                    Forest Rescue Team
                  </Button>
                </div>

                {/* Instructions */}
                <p className="text-xs text-center text-muted-foreground mt-6">
                  Your location has been shared with rescue services.
                  Stay where you are and keep your phone charged.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SOSButton;
