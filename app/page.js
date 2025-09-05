import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import ShortHistory from "./components/ShortHistory";
import Activities from "./components/Activities";
import AnimatedMandala from "./components/AnimatedMandala";
import AnimatedTree from "./components/AnimatedTree";
import Members from "./components/Members";
export default function Home() {
  return (
    <div className="relative">
      {/* Animated Mandala Background */}
      <AnimatedMandala />
      <AnimatedTree />
      
      {/* Hero Section */}
      <section id="home" className="relative z-20 min-h-screen pt-20 pb-20">
        <Hero />
      </section>
      
      {/* About Section (History) */}
      <section id="about" className="relative z-20 min-h-screen pt-20">
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
