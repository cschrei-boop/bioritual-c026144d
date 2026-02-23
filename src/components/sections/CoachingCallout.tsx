import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CoachingCallout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 px-6 md:px-12 bg-secondary rounded-3xl">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl mb-4">What about the Coaching Sprint?</h3>
          <p className="text-foreground/70 leading-normal mb-4">
            The 3-Month Coaching Sprint adds direct access to the founders — Hans and Luis — via weekly video calls and ongoing oversight. Jesse™ is still part of the experience. The difference is that two humans who built this are also in the room.
          </p>
          <p className="text-foreground/70 leading-normal mb-8">
            Not everyone needs that. We'll tell you if you don't.
          </p>
          <Link
            to="/coaching"
            className="inline-block text-sm tracking-[0.15em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            → Learn more about the Coaching Sprint
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingCallout;
