import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import CampfireSection from '@/components/CampfireSection';
import Footer from '@/components/Footer';
import SOSButton from '@/components/SOSButton';
import LeafParticles from '@/components/particles/LeafParticles';
import FireflyParticles from '@/components/particles/FireflyParticles';
import MistEffect from '@/components/particles/MistEffect';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Ambient Particles */}
      <LeafParticles />
      <FireflyParticles />
      <MistEffect />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ExperiencesSection />
        <CampfireSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Emergency SOS Button */}
      <SOSButton />
    </div>
  );
};

export default Index;
