import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Stays', href: '#stays' },
  { label: 'Adventures', href: '#adventures' },
  { label: 'Culture', href: '#culture' },
  { label: 'Gallery', href: '#gallery' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'glass-neon py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-neon-purple flex items-center justify-center shadow-[0_0_20px_hsla(180,100%,50%,0.3)]">
              <Leaf className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-display text-xl hidden sm:block">Vanavasam</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-body text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_hsla(180,100%,50%,0.5)]" />
              </motion.a>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button 
              variant="neon" 
              size="sm"
              onClick={() => setIsBookingOpen(true)}
              className="gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-foreground/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-20 glass-neon md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-display text-2xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button 
                variant="hero" 
                size="lg" 
                className="mt-4 gap-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Navigation;
