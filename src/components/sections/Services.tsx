import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Bot, FlaskConical, ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-2 hidden lg:block"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden sticky top-24">
              <img 
                src={heroPortrait} 
                alt="Placeholder for illustration" 
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/50 rounded-2xl px-4 py-3 border border-border/30">
                <p className="text-xs text-muted-foreground italic">
                  Illustration placeholder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl p-8"
            >
              <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4 font-medium">
                Ways to Work With Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Choose Your Path
              </h2>
            </motion.div>

            {/* Services */}
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className={`group backdrop-blur-xl border rounded-3xl p-8 transition-all duration-300 hover:shadow-lg ${
                  service.featured
                    ? "bg-primary/10 border-primary/40 hover:border-primary/60"
                    : "bg-background/70 border-border/50 hover:bg-background/80 hover:border-primary/30"
                }`}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    service.featured ? "bg-primary/30" : "bg-primary/20 group-hover:bg-primary/30"
                  }`}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    {service.featured && (
                      <span className="inline-block text-xs tracking-wider uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3 font-medium">
                        Most Popular
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {service.title}
                    </h3>

                    {/* Duration */}
                    <p className="text-sm text-primary/80 mb-3 font-medium">
                      {service.duration}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Button
                      variant={service.featured ? "default" : "outline"}
                      className={`gap-2 rounded-xl ${
                        service.featured
                          ? "bg-primary hover:bg-primary/90"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="backdrop-blur-md bg-background/50 border border-border/30 rounded-2xl p-6 text-center"
            >
              <p className="text-muted-foreground text-sm">
                Many members combine approaches — starting with AI, layering peptides, 
                and upgrading to coaching as needed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
