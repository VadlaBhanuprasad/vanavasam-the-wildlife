import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Mail, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const experiences = [
  { id: 'forest-stays', name: 'Forest Stays', icon: '🏕️' },
  { id: 'night-safari', name: 'Night Safari', icon: '🌙' },
  { id: 'wildlife', name: 'Wildlife Safari', icon: '🐘' },
  { id: 'waterfalls', name: 'Waterfalls Trek', icon: '💧' },
  { id: 'temples', name: 'Sacred Temples', icon: '🛕' },
  { id: 'tribal', name: 'Tribal Culture', icon: '🔥' },
];

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState<Date>();
  const [selectedExperience, setSelectedExperience] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setName('');
      setEmail('');
      setDate(undefined);
      setSelectedExperience('');
    }, 2000);
  };

  return (
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
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg glass-neon rounded-2xl p-6 md:p-8 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-neon-purple/20 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-neon-green/20 flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                >
                  <Check className="w-10 h-10 text-neon-green" />
                </motion.div>
                <h3 className="text-display text-2xl mb-2">Booking Confirmed!</h3>
                <p className="text-muted-foreground">We'll contact you soon with details.</p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-display text-3xl mb-2 neon-text">Book Your Adventure</h2>
                  <p className="text-muted-foreground text-sm">Start your journey into the wilderness</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Preferred Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-muted/50",
                            !date && "text-muted-foreground"
                          )}
                        >
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Experience Selection */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Choose Experience
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {experiences.map((exp) => (
                        <button
                          key={exp.id}
                          type="button"
                          onClick={() => setSelectedExperience(exp.id)}
                          className={cn(
                            "p-3 rounded-lg border text-left transition-all text-sm",
                            selectedExperience === exp.id
                              ? "border-primary bg-primary/10 shadow-[0_0_15px_hsla(180,100%,50%,0.2)]"
                              : "border-border hover:border-primary/50 bg-muted/30"
                          )}
                        >
                          <span className="mr-2">{exp.icon}</span>
                          {exp.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={!name || !email || !date || !selectedExperience}
                  >
                    Confirm Booking
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
