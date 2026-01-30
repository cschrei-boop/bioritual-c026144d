import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
interface NotSureBlockProps {
  variant?: "homepage" | "product";
}
export const NotSureBlock = ({
  variant = "product"
}: NotSureBlockProps) => {
  if (variant === "homepage") {
    return;
  }
  return <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-foreground/70 mb-2">
          Not sure this is the right level?
        </p>
        <Link to="/start-here" className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity">
          Compare all Bio Signals options
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>;
};
export default NotSureBlock;