import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, AlertTriangle, X, Shield, Loader2 } from 'lucide-react';

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleSOS = () => {
    setIsOpen(true);
    setIsLocating(true);
    
    // Get current location
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
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        <Button
          variant="sos"
          size="lg"
          onClick={handleSOS}
          className="rounded-full w-16 h-16 p-0 relative"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-destructive opacity-75" />
          <Shield className="w-7 h-7 relative z-10" />
        </Button>
      </motion.div>

      {/* SOS Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md p-6 rounded-2xl glass-forest border border-destructive/30"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-display text-2xl text-destructive">Emergency SOS</h3>
                  <p className="text-body text-sm text-muted-foreground">Help is on the way</p>
                </div>
              </div>

              {/* Location Status */}
              <div className="p-4 rounded-xl bg-background/50 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-temple-gold" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">Your Location</p>
                    {isLocating ? (
                      <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        Acquiring GPS...
                      </div>
                    ) : location ? (
                      <p className="text-xs text-muted-foreground">
                        {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">Location unavailable</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="space-y-3 mb-6">
                <p className="text-body text-sm text-muted-foreground">Contact Rescue Team:</p>
                
                <motion.a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 p-4 rounded-xl bg-destructive/20 hover:bg-destructive/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                    <Phone className="w-5 h-5 text-destructive-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Forest Rescue Unit</p>
                    <p className="text-sm text-muted-foreground">+91 123 456 7890</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:112"
                  className="flex items-center gap-3 p-4 rounded-xl bg-forest-canopy/50 hover:bg-forest-canopy/70 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-full bg-forest-moss flex items-center justify-center">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Emergency Services</p>
                    <p className="text-sm text-muted-foreground">112</p>
                  </div>
                </motion.a>
              </div>

              {/* Safety Tips */}
              <div className="p-4 rounded-xl bg-temple-gold/10 border border-temple-gold/20">
                <p className="text-body text-xs text-temple-gold">
                  <strong>Stay calm.</strong> Keep your phone on. Our rescue team has been notified 
                  and will reach you shortly. Do not wander from your location.
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
