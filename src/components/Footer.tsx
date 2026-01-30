import { motion } from 'framer-motion';
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-primary/20">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-1"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-neon-purple flex items-center justify-center shadow-[0_0_20px_hsla(180,100%,50%,0.3)]">
                <Leaf className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-display text-xl bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">Vanavasam</span>
            </div>
            <p className="text-body text-sm text-foreground/85">
              Experience the untamed beauty of India's sacred forests.
              Where adventure meets spirituality.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full glass-neon hover:border-primary/50 transition-all hover:shadow-[0_0_15px_hsla(180,100%,50%,0.4)] hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-primary/80 hover:text-primary" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-display text-lg text-primary">Explore</h4>
            <ul className="space-y-2.5 text-body text-sm">
              {['Wildlife Tours', 'Jungle Camps', 'Bird Watching', 'Nature Photography', 'Eco Lodges', 'Adventure Sports'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/90 hover:text-primary hover:pl-1 transition-all duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <h4 className="text-display text-lg text-primary">Experiences</h4>
            <ul className="space-y-2.5 text-body text-sm">
              {['Forest Stays', 'Night Safari', 'Temple Visits', 'Tribal Culture', 'Waterfall Treks', 'River Rafting', 'Mountain Hiking'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/90 hover:text-primary hover:pl-1 transition-all duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-display text-lg text-primary">Support</h4>
            <ul className="space-y-2.5 text-body text-sm">
              {['Emergency SOS', 'Safety Guidelines', 'FAQs', 'Cancellation Policy', 'Eco Guidelines', 'Travel Insurance', 'Booking Help'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/90 hover:text-primary hover:pl-1 transition-all duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="space-y-4"
          >
            <h4 className="text-display text-lg text-primary">Contact</h4>
            <ul className="space-y-3 text-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-neon-orange flex-shrink-0" />
                <span className="text-foreground/90">Western Ghats Reserve, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neon-green flex-shrink-0" />
                <span className="text-foreground/90">+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neon-purple flex-shrink-0" />
                <span className="text-foreground/90">explore@vanavasam.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body text-xs text-foreground/80">
            © 2025 Vanavasam. All rights reserved. Built with respect for nature.
          </p>
          <div className="flex gap-6 text-body text-xs">
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Eco Pledge</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Careers</a>
            <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
