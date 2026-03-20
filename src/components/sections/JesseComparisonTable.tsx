import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type CellValue = "check" | "cross" | "partial";

interface Row {
  label: string;
  values: [CellValue, CellValue, CellValue, CellValue, CellValue];
}

interface SectionGroup {
  section: string;
  rows: Row[];
}

const columns = ["Jesse", "Influencers", "Google", "ChatGPT", "Hire a Pro"];

const data: SectionGroup[] = [
  {
    section: "Quality of Information",
    rows: [
      { label: "Cuts through the noise", values: ["check", "cross", "cross", "check", "cross"] },
      { label: "Tells you what you need to know before you know to ask", values: ["check", "cross", "cross", "cross", "cross"] },
      { label: "Built around your body, not everyone's", values: ["check", "cross", "cross", "cross", "check"] },
    ],
  },
  {
    section: "Relationship & Growth",
    rows: [
      { label: "Remembers your journey", values: ["check", "cross", "cross", "cross", "check"] },
      { label: "Helps you figure out what's actually going on", values: ["check", "cross", "cross", "check", "check"] },
      { label: "Respects your intelligence & invites your curiosity", values: ["check", "cross", "cross", "cross", "cross"] },
      { label: "Makes your doctor visits actually count", values: ["check", "cross", "cross", "cross", "cross"] },
    ],
  },
  {
    section: "Trust & Integrity",
    rows: [
      { label: "Not trying to sell you anything", values: ["check", "cross", "cross", "check", "check"] },
      { label: "Someone you can actually trust", values: ["check", "cross", "cross", "cross", "check"] },
      { label: "Challenges what you think you already know", values: ["check", "cross", "cross", "cross", "check"] },
      { label: "Tells you what you need to hear, not just what you want", values: ["check", "cross", "partial", "check", "check"] },
    ],
  },
  {
    section: "Access & Cost",
    rows: [
      { label: "Won't break the bank", values: ["check", "check", "check", "check", "cross"] },
      { label: "No appointments, no waiting rooms", values: ["check", "check", "check", "check", "cross"] },
      { label: "On your time, at your pace", values: ["check", "cross", "check", "check", "cross"] },
    ],
  },
];

const scores = [14, 2, 3, 7, 6];

const CellIcon = ({ value, isJesse = false }: { value: CellValue; isJesse?: boolean }) => {
  if (value === "check") return <span className={isJesse ? "text-white" : "text-foreground"}>✓</span>;
  if (value === "cross") return <span className={isJesse ? "text-white/30" : "text-destructive"}>✗</span>;
  return <span className={isJesse ? "text-white/50" : "text-muted-foreground"}>~</span>;
};

/* ── Mobile: stacked cards ── */
const MobileView = () => (
  <div className="space-y-3">
    {data.map((group) => (
      <div key={group.section}>
        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
          {group.section}
        </p>
        <div className="space-y-1.5">
          {group.rows.map((row) => (
            <div key={row.label} className="border border-border p-2.5">
              <p className="text-[11px] font-semibold text-foreground mb-2">{row.label}</p>
              <div className="grid grid-cols-5 gap-0.5 text-center">
                {columns.map((col, i) => (
                  <div key={col} className={i === 0 ? "bg-[hsl(270,50%,35%)] rounded-full py-1" : "py-1"}>
                    <p className={`text-[7px] uppercase tracking-wide mb-0.5 leading-tight font-display ${i === 0 ? "text-white/70" : "text-muted-foreground"}`}>
                      {col}
                    </p>
                    <span className="text-xs">
                      <CellIcon value={row.values[i]} isJesse={i === 0} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

    <div className="bg-foreground text-background p-2.5">
      <p className="text-[9px] uppercase tracking-widest text-background/50 mb-1.5 font-semibold">
        ✓ Score / 14
      </p>
      <div className="grid grid-cols-5 gap-0.5 text-center">
        {columns.map((col, i) => (
          <div key={col} className={i === 0 ? "bg-[hsl(270,50%,35%)] rounded-full py-1" : "py-1"}>
            <p className={`text-[7px] uppercase tracking-wide mb-0.5 leading-tight font-display ${i === 0 ? "text-white/70" : "text-background/50"}`}>
              {col}
            </p>
            <span className={`text-xs font-bold ${
              i === 0 ? "text-white" : scores[i] <= 3 ? "text-background/30" : "text-background/60"
            }`}>
              {scores[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── Desktop: white bg table with purple Jesse column ── */
const DesktopView = () => (
  <div className="overflow-x-auto border border-border">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-foreground text-background">
          <th className="text-left px-3 py-2 text-[10px] uppercase tracking-wider text-background/30 font-medium w-[190px]">
            Attribute
          </th>
          {columns.map((col, i) => (
            <th
              key={col}
              className={`px-3 py-2 text-center font-display tracking-wide whitespace-nowrap ${
                i === 0
                  ? "bg-[hsl(270,50%,35%)] text-white text-[22px] rounded-t-full w-[120px]"
                  : "text-background/50 text-[13px]"
              }`}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((group) => (
          <>
            <tr key={`section-${group.section}`}>
              <td
                colSpan={6}
                className="bg-secondary px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-muted-foreground"
              >
                {group.section}
              </td>
            </tr>
            {group.rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-border hover:bg-secondary/50 transition-colors"
              >
                <td className="px-3 py-2 text-left text-[11px] font-semibold text-muted-foreground">
                  {row.label}
                </td>
                {row.values.map((val, i) => (
                  <td
                    key={i}
                    className={`px-3 py-2 text-center ${
                      i === 0
                        ? "bg-[hsl(270,50%,35%)]/10 border-l border-l-[hsl(270,50%,35%)]/30 border-r border-r-[hsl(270,50%,35%)]/30 text-lg"
                        : "text-sm"
                    }`}
                  >
                    <CellIcon value={val} />
                  </td>
                ))}
              </tr>
            ))}
          </>
        ))}

        <tr className="bg-foreground text-background">
          <td className="px-3 py-2 text-[9px] uppercase tracking-wider text-background/30 font-semibold">
            ✓ Score / 14
          </td>
          {scores.map((score, i) => (
            <td
              key={i}
              className={`px-3 py-2 text-center font-display ${
                i === 0
                  ? "bg-[hsl(270,50%,35%)] text-white text-2xl rounded-b-full"
                  : score <= 3
                    ? "text-background/25 text-sm"
                    : "text-background/50 text-sm"
              }`}
            >
              {score} / 14
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

const JesseComparisonTable = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 md:py-12 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-5xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-1">
            How people learn about their bodies.
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            A comparison of information sources — and why trusted guidance changes outcomes.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex gap-3 mb-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1"><span className="text-foreground">✓</span> Yes</span>
            <span className="flex items-center gap-1"><span className="text-muted-foreground">~</span> Partial</span>
            <span className="flex items-center gap-1"><span className="text-destructive">✗</span> No</span>
          </div>

          {isMobile ? <MobileView /> : <DesktopView />}

          <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed max-w-3xl">
            Jesse is not a replacement for medical professionals — it's what helps you become an informed participant in your own health.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default JesseComparisonTable;
