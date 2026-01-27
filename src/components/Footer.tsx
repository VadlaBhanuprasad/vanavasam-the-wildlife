import { motion } from 'framer-motion';
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-fern to-forest-canopy flex items-center justify-center">
                <Leaf className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-display text-xl">Vanavasam</span>
            </div>
            <p className="text-body text-sm text-muted-foreground">
              Experience the untamed beauty of India's sacred forests. 
              Where adventure meets spirituality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full glass-light hover:bg-foreground/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full glass-light hover:bg-foreground/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full glass-light hover:bg-foreground/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-display text-lg">Experiences</h4>
            <ul className="space-y-2 text-body text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Forest Stays</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Night Safari</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Temple Visits</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tribal Culture</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Waterfall Treks</a></li>
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
            <h4 className="text-display text-lg">Support</h4>
            <ul className="space-y-2 text-body text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Emergency SOS</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Eco Guidelines</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-display text-lg">Contact</h4>
            <ul className="space-y-3 text-body text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-temple-gold flex-shrink-0" />
                <span>Western Ghats Reserve, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-temple-gold flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-temple-gold flex-shrink-0" />
                <span>explore@vanavasam.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body text-xs text-muted-foreground">
            © 2025 Vanavasam. All rights reserved. Built with respect for nature.
          </p>
          <div className="flex gap-6 text-body text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Eco Pledge</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
