import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OperationalReality from "@/components/OperationalReality";
import Capabilities from "@/components/Capabilities";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import Impact from "@/components/Impact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackStrip from "@/components/TechStackStrip";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <TechStackStrip />
      <OperationalReality />
      <Capabilities />
      <Industries />
      <Approach />
      <Impact />
      <CaseStudiesSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
