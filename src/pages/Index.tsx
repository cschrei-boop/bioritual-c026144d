import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturedServices from "@/components/sections/FeaturedServices";
import PressQuotes from "@/components/sections/PressQuotes";
import ShopByGoal from "@/components/sections/ShopByGoal";
import FounderQuote from "@/components/sections/FounderQuote";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import ThreePillarsCarousel from "@/components/sections/ThreePillarsCarousel";
import ValueProps from "@/components/sections/ValueProps";
import ChooseYourPath from "@/components/sections/ChooseYourPath";
import GetTheLook from "@/components/sections/GetTheLook";
import FinalCTA from "@/components/sections/FinalCTA";
import { NotSureBlock } from "@/components/sections/NotSureBlock";
import Footer from "@/components/sections/Footer";
import StickyEmailFooter from "@/components/sections/StickyEmailFooter";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedServices />
      <PressQuotes />
      <ShopByGoal />
      <FounderQuote />
      <FeaturedCollection />
      <ThreePillarsCarousel />
      <ValueProps />
      <ChooseYourPath />
      <NotSureBlock variant="homepage" />
      <GetTheLook />
      <FinalCTA />
      <Footer />
      <StickyEmailFooter />
    </main>
  );
};

export default Index;
