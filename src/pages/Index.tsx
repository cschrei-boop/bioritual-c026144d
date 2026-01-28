import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ThreeLegs from "@/components/sections/ThreeLegs";
import Peptides from "@/components/sections/Peptides";
import Categories from "@/components/sections/Categories";
import Services from "@/components/sections/Services";
import WhyNinetyDays from "@/components/sections/WhyNinetyDays";
import BuiltFor from "@/components/sections/BuiltFor";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyEmailFooter from "@/components/sections/StickyEmailFooter";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <ThreeLegs />
      <Peptides />
      <Categories />
      <Services />
      <WhyNinetyDays />
      <BuiltFor />
      <FinalCTA />
      <Footer />
      <StickyEmailFooter />
    </main>
  );
};

export default Index;
