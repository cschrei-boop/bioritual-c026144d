import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "January 28, 2025";

const ConsentAcknowledgment = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
          Consent & Acknowledgment
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-10 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 1 — PURPOSE OF THIS CONSENT
            </h2>
            <p className="leading-relaxed">
              This Consent & Acknowledgment explains the nature of Bio Signals
              protocols and confirms your understanding before participation.
            </p>
            <p className="leading-relaxed mt-3">
              By purchasing or participating in any Bio Signals protocol, you
              acknowledge and agree to the statements below.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 2 — EDUCATIONAL NATURE OF SERVICES
            </h2>
            <p className="leading-relaxed">
              I understand that Bio Signals provides educational and lifestyle
              optimization protocols only.
            </p>
            <p className="leading-relaxed mt-3">I acknowledge that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Bio Signals does not provide medical advice</li>
              <li>Bio Signals does not diagnose or treat medical conditions</li>
              <li>Bio Signals does not prescribe medication</li>
              <li>Bio Signals does not act as a healthcare provider</li>
            </ul>
            <p className="leading-relaxed mt-3">
              All information and guidance are provided for educational and
              informational purposes.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 3 — NO MEDICAL PROVIDER RELATIONSHIP
            </h2>
            <p className="leading-relaxed">
              I understand that participation in a Bio Signals protocol does not
              create a doctor–patient, clinician–patient, or other healthcare
              provider relationship.
            </p>
            <p className="leading-relaxed mt-3">
              I acknowledge that I am responsible for consulting licensed
              healthcare professionals as appropriate.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 4 — BIO SIGNALS & PEPTIDES (EDUCATIONAL CONTEXT)
            </h2>
            <p className="leading-relaxed">
              I understand that some Bio Signals protocols may reference bio
              signals, including peptides, in a high-level educational and
              informational context.
            </p>
            <p className="leading-relaxed mt-3">I acknowledge that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>No individual compounds, substances, or peptides are sold as products</li>
              <li>No substances are itemized or priced individually</li>
              <li>No medical claims are made regarding efficacy or outcomes</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Any discussion of bio signals is provided for educational
              understanding only.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 5 — PROTOCOL MATERIALS & SHIPPING
            </h2>
            <p className="leading-relaxed">
              I understand that participation in a Bio Signals protocol may
              include non-itemized protocol materials and printed educational
              resources, which may be shipped to me.
            </p>
            <p className="leading-relaxed mt-3">I acknowledge that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Materials are included as part of the protocol experience</li>
              <li>Materials are not sold separately</li>
              <li>Materials have no individual retail value</li>
              <li>Materials are provided only within an active protocol</li>
            </ul>
            <p className="leading-relaxed mt-3">
              I understand that shipping timelines are estimates and not
              guaranteed.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 6 — PERSONAL RESPONSIBILITY
            </h2>
            <p className="leading-relaxed">I acknowledge that:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>My participation is voluntary</li>
              <li>I am responsible for my own decisions and actions</li>
              <li>I will use information provided at my own discretion</li>
              <li>I will consult licensed professionals where appropriate</li>
            </ul>
            <p className="leading-relaxed mt-3">
              I assume full responsibility for how I apply any information
              provided.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 7 — NO GUARANTEE OF RESULTS
            </h2>
            <p className="leading-relaxed">
              I understand that outcomes vary based on individual biology,
              participation, consistency, and context.
            </p>
            <p className="leading-relaxed mt-3">I acknowledge that:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>No results are guaranteed</li>
              <li>No specific outcomes are promised or implied</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 8 — PAYMENT & REFUND ACKNOWLEDGMENT
            </h2>
            <p className="leading-relaxed">I understand that:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Bio Signals protocols are time-bound services</li>
              <li>Purchases are one-time payments</li>
              <li>This is not a subscription</li>
              <li>Refunds are not available once onboarding or fulfillment has begun</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 9 — ASSUMPTION OF RISK
            </h2>
            <p className="leading-relaxed">
              I acknowledge that participation involves personal decision-making
              and assume all risks associated with my participation.
            </p>
            <p className="leading-relaxed mt-3">
              I agree to release and hold harmless Bio Signals from claims
              arising from my participation, except where prohibited by law.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 10 — AFFIRMATIVE CONSENT
            </h2>
            <p className="leading-relaxed">
              By completing my purchase and participating in a Bio Signals
              protocol, I affirm that:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>I have read and understood this Consent & Acknowledgment</li>
              <li>I agree to all terms stated above</li>
              <li>I consent to participate under these conditions</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ConsentAcknowledgment;
