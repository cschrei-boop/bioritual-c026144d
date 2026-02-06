interface BlogDisclaimerProps {
  /** Custom disclaimer text. Defaults to standard educational disclaimer. */
  text?: string;
}

/**
 * Standard disclaimer section for blog/article pages.
 */
const BlogDisclaimer = ({
  text = "Educational content only. Not medical advice. Individual decisions should be made with appropriate clinical guidance.",
}: BlogDisclaimerProps) => {
  return (
    <section className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-muted-foreground leading-normal text-center">
          {text}
        </p>
      </div>
    </section>
  );
};

export default BlogDisclaimer;
