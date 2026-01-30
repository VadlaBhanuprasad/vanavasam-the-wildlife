import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import StaysSection from '@/components/StaysSection';
import AdventuresSection from '@/components/AdventuresSection';
import CulturalSection from '@/components/CulturalSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CampfireSection from '@/components/CampfireSection';
import WildlifeActivity from '@/components/visualizations/WildlifeActivity';
import WeatherForest from '@/components/visualizations/WeatherForest';
import InteractiveMap from '@/components/visualizations/InteractiveMap';
import EcoImpact from '@/components/visualizations/EcoImpact';
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
        <StaysSection />
        <AdventuresSection />
        <CulturalSection />
        <GallerySection />
        <TestimonialsSection />
        <WildlifeActivity />
        <WeatherForest />
        <InteractiveMap />
        <CampfireSection />
        <EcoImpact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Emergency SOS Button */}
      <SOSButton />
    </div>
  );
};

export default Index;
