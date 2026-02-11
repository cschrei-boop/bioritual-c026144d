import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FounderQuote from "@/components/sections/FounderQuote";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import ThreePillarsCarousel from "@/components/sections/ThreePillarsCarousel";
import ValueProps from "@/components/sections/ValueProps";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyEmailFooter from "@/components/sections/StickyEmailFooter";
import EmailPopup from "@/components/sections/EmailPopup";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <FounderQuote />
      <FeaturedCollection />
      <ThreePillarsCarousel />
      <ValueProps />
      <FinalCTA />
      <Footer />
      <StickyEmailFooter />
      <EmailPopup />
    </main>
  );
};

export default Index;
