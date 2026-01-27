import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Bot, FlaskConical, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "1-on-1 Coaching",
    price: "3 months",
    color: "cyan",
    featured: true,
  },
  {
    icon: Bot,
    title: "AI Coach",
    price: "$10/mo",
    color: "magenta",
    featured: false,
  },
  {
    icon: FlaskConical,
    title: "Protocols",
    price: "90 days",
    color: "yellow",
    featured: false,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-10 md:py-14 px-6 overflow-hidden bg-transparent">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-cyan/5 via-magenta/5 to-yellow/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto bg-background/70 backdrop-blur-md rounded-3xl p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="font-serif text-2xl md:text-3xl">Choose Your Path</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative bg-card/60 backdrop-blur-sm border rounded-2xl p-5 text-center transition-all hover:shadow-lg ${
                service.featured ? `border-${service.color}` : "border-border"
              }`}
            >
              {service.featured && (
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase bg-${service.color} text-white px-2 py-0.5 rounded-full font-medium`}>
                  Popular
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl bg-${service.color}/20 flex items-center justify-center mx-auto mb-3`}>
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>
              <h3 className="font-serif text-lg mb-1">{service.title}</h3>
              <p className={`text-xs text-${service.color} font-medium mb-4`}>{service.price}</p>
              <Button
                size="sm"
                variant={service.featured ? "default" : "outline"}
                className={`w-full gap-1 text-xs ${service.featured ? "bg-primary" : ""}`}
              >
                Start
                <ArrowRight className="w-3 h-3" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
