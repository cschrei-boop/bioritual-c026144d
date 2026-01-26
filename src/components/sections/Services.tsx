import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Bot, FlaskConical, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "1-on-1 Biological Optimization Coaching",
    duration: "3-month structured programs",
    description: "Personalized guidance across nutrition, peptides, and movement.",
    cta: "Book Consultation",
    featured: true,
  },
  {
    icon: Bot,
    title: "AI-Powered Optimization Coach",
    duration: "24/7 support — $10/month",
    description: "Your personal AI coach trained on peptide science, metabolic optimization, and BIORITUAL systems.",
    cta: "Start AI Coach",
    featured: false,
  },
  {
    icon: FlaskConical,
    title: "Peptide Protocol Subscriptions",
    duration: "90-day research-backed protocols",
    description: "Clear education. Structured delivery. No guesswork.",
    cta: "Explore Protocols",
    featured: false,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4">
            Ways to Work With Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Choose Your Path
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className={`group relative bg-card/50 backdrop-blur-sm border rounded-lg p-8 transition-all duration-300 hover:bg-card/80 flex flex-col ${
                service.featured
                  ? "border-primary/40 hover:border-primary/60"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="text-xs tracking-wider uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-foreground mb-2">
                {service.title}
              </h3>

              {/* Duration */}
              <p className="text-sm text-primary/80 mb-4">
                {service.duration}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* CTA */}
              <Button
                variant={service.featured ? "default" : "outline"}
                className={`w-full gap-2 ${
                  service.featured
                    ? "bg-primary hover:bg-primary/90"
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-muted-foreground mt-12 max-w-xl mx-auto"
        >
          Many members combine approaches — starting with AI, layering peptides, 
          and upgrading to coaching as needed.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
