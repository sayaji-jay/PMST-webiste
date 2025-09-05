'use client';

import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import ShortHistory from "./components/ShortHistory";
import Activities from "./components/Activities";
import AnimatedMandala from "./components/AnimatedMandala";
import AnimatedTree from "./components/AnimatedTree";
import Members from "./components/Members";
import { useBannerVisibility } from "./hooks/useBannerVisibility";
export default function Home() {
  const bannerVisible = useBannerVisibility();
  
  return (
    <div className="relative">
      {/* Animated Mandala Background */}
      <AnimatedMandala />
      <AnimatedTree />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className={`relative z-20 min-h-screen pb-4 md:pb-20 ${
          bannerVisible 
            ? 'pt-36 md:pt-36' 
            : 'pt-20 md:pt-24'
        }`}
      >
        <Hero />
      </section>
      
      {/* About Section (History) */}
      <section id="about" className="relative z-20 min-h-screen pt-4 md:pt-20">
        <ShortHistory />
      </section>


      {/* Mission & Vision Section */}
      <section id="mission" className="relative z-20 min-h-screen pt-20">
        <Members />
      </section>
      
      {/* Mission & Vision Section */}
      <section id="mission" className="relative z-20 min-h-screen pt-20">
        <MissionVision />
      </section>
      
      {/* Activities Section */}
      <section id="activities" className="relative z-20 min-h-screen pt-20 pb-20">
        <Activities />
      </section>
    </div>
  );
}
