import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Bot, FlaskConical, ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const services = [
  {
    icon: Users,
    title: "1-on-1 Coaching",
    duration: "3-month programs",
    description: "Personalized guidance across nutrition, peptides, and movement.",
    cta: "Book",
    featured: true,
  },
  {
    icon: Bot,
    title: "AI Coach",
    duration: "$10/month",
    description: "24/7 AI trained on peptide science and BIORITUAL systems.",
    cta: "Start",
    featured: false,
  },
  {
    icon: FlaskConical,
    title: "Peptide Protocols",
    duration: "90-day protocols",
    description: "Research-backed protocols. No guesswork.",
    cta: "Explore",
    featured: false,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-2 hidden lg:block"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden sticky top-20">
              <img src={heroPortrait} alt="Placeholder" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-background/50 rounded-xl px-3 py-2 border border-border/30">
                <p className="text-xs text-muted-foreground italic">Illustration placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl p-5"
            >
              <p className="text-xs tracking-[0.2em] text-primary uppercase mb-2 font-medium">
                Ways to Work With Us
              </p>
              <h2 className="font-serif text-2xl md:text-3xl">Choose Your Path</h2>
            </motion.div>

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`backdrop-blur-xl border rounded-2xl p-5 transition-all duration-300 ${
                  service.featured
                    ? "bg-primary/10 border-primary/40"
                    : "bg-background/70 border-border/50 hover:border-primary/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    service.featured ? "bg-primary/30" : "bg-primary/20"
                  }`}>
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-lg text-foreground">{service.title}</h3>
                      {service.featured && (
                        <span className="text-[10px] uppercase bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-primary/80 mb-2 font-medium">{service.duration}</p>
                    <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
                    <Button
                      size="sm"
                      variant={service.featured ? "default" : "outline"}
                      className={`gap-1 text-xs h-8 rounded-lg ${
                        service.featured ? "bg-primary hover:bg-primary/90" : ""
                      }`}
                    >
                      {service.cta}
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
