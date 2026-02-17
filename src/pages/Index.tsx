import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OperationalReality from "@/components/OperationalReality";
import Capabilities from "@/components/Capabilities";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import Impact from "@/components/Impact";
import Insights from "@/components/Insights";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <OperationalReality />
      <Capabilities />
      <Industries />
      <Approach />
      <Impact />
      <Insights />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
