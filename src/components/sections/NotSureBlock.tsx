import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface NotSureBlockProps {
  variant?: "homepage" | "product";
}

export const NotSureBlock = ({ variant = "product" }: NotSureBlockProps) => {
  if (variant === "homepage") {
    return (
      <section className="px-6 md:px-12 lg:px-24 py-10 md:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Not sure where to start?
          </h2>
          <p className="text-foreground/70 mb-6">
            Compare the Bio Signals experiences and choose the level of support that fits you best.
          </p>
          <Link
            to="/start-here"
            className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity font-medium"
          >
            Start here
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-foreground/70 mb-2">
          Not sure this is the right level?
        </p>
        <Link
          to="/start-here"
          className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
        >
          Compare all Bio Signals options
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default NotSureBlock;
