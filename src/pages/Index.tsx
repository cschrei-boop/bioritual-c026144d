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
import ImageBackground from "@/components/ImageBackground";
import backgroundImage from "@/assets/background-gradient.jpg";

const Index = () => {
  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden pt-14">
      <ImageBackground src={backgroundImage} opacity={0.8} overlayOpacity={0.2} />
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
    </main>
  );
};

export default Index;
