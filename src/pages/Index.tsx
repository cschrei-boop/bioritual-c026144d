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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
    </main>
  );
};

export default Index;
