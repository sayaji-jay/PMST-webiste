import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import ShortHistory from "./components/ShortHistory";
import Activities from "./components/Activities";
import AnimatedMandala from "./components/AnimatedMandala";

export default function Home() {
  return (
    <div className="relative">
      {/* Animated Mandala Background */}
      <AnimatedMandala />
      
      {/* Hero Section */}
      <section id="home" className="relative z-20 min-h-screen pt-10 pb-20">
        <Hero />
      </section>
      
      {/* About Section (History) */}
      <section id="about" className="relative z-20 min-h-screen bg-white/5 backdrop-blur-sm">
        <ShortHistory />
      </section>
      
      {/* Mission & Vision Section */}
      <section id="mission" className="relative z-20 min-h-screen bg-white/3 backdrop-blur-sm">
        <MissionVision />
      </section>
      
      {/* Activities Section */}
      <section id="activities" className="relative z-20 min-h-screen bg-white/5 backdrop-blur-sm pb-20">
        <Activities />
      </section>
    </div>
  );
}
