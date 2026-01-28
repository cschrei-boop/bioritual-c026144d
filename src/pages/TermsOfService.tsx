import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "January 28, 2025";
const SUPPORT_EMAIL = "support@biosignals.com";

const TermsOfService = () => {
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
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          (Educational Optimization Protocols)
          <br />
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-10 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 1 — ACCEPTANCE OF TERMS
            </h2>
            <p className="leading-relaxed">
              By accessing this website or purchasing any Bio Signals protocol,
              you agree to be bound by these Terms of Service ("Terms").
            </p>
            <p className="leading-relaxed mt-3">
              If you do not agree with these Terms, you may not access or use
              the services provided.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 2 — DESCRIPTION OF SERVICES
            </h2>
            <p className="leading-relaxed">
              Bio Signals provides educational and lifestyle optimization
              protocols designed to support understanding of biological
              signaling, habits, recovery, and long-term consistency.
            </p>
            <p className="leading-relaxed mt-3">Services may include:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Educational guidance and frameworks</li>
              <li>Structured, time-bound optimization protocols</li>
              <li>Digital tools such as a private client wiki</li>
              <li>Tracking and accountability infrastructure</li>
              <li>Protocol-related materials and printed educational resources</li>
            </ul>
            <p className="leading-relaxed mt-3 font-medium">
              Bio Signals does not provide medical care, diagnosis, treatment,
              or prescriptions.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 3 — NO MEDICAL ADVICE
            </h2>
            <p className="leading-relaxed">
              All content, services, and materials provided by Bio Signals are
              for educational and informational purposes only.
            </p>
            <p className="leading-relaxed mt-3">
              Nothing provided should be interpreted as:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Medical advice</li>
              <li>Diagnosis</li>
              <li>Treatment</li>
              <li>Prescription</li>
              <li>A substitute for consultation with a licensed healthcare professional</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Always consult a qualified healthcare provider before making
              decisions related to health, wellness, diet, exercise, or medical
              care.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 4 — NO DOCTOR–PATIENT RELATIONSHIP
            </h2>
            <p className="leading-relaxed">
              Participation in any Bio Signals protocol does not create a
              doctor–patient, clinician–patient, or other healthcare provider
              relationship.
            </p>
            <p className="leading-relaxed mt-3">
              Bio Signals does not act as a medical provider.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 5 — BIO SIGNALS & PEPTIDES (EDUCATIONAL CONTEXT)
            </h2>
            <p className="leading-relaxed">
              Some protocols may reference bio signals, including peptides, in a
              high-level educational and informational capacity.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>No individual compounds, substances, or peptides are sold, prescribed, or itemized</li>
              <li>Any protocol materials provided are included as part of a broader educational experience</li>
              <li>Materials are not available for individual purchase</li>
              <li>No medical claims are made regarding outcomes or efficacy</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 6 — PROTOCOL MATERIALS & SHIPPING
            </h2>
            <p className="leading-relaxed">
              Certain protocols may include non-itemized protocol materials and
              printed educational resources, which may be shipped as part of
              participation.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Materials are provided only within the context of an active protocol</li>
              <li>Materials are not sold separately</li>
              <li>Materials have no individual monetary value</li>
              <li>Shipping timelines are communicated after purchase</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Access to materials may be contingent upon onboarding completion.
              For full details, see our{" "}
              <Link to="/fulfillment" className="underline hover:no-underline">
                Fulfillment & Shipping Policy
              </Link>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 7 — ELIGIBILITY & RESPONSIBILITY
            </h2>
            <p className="leading-relaxed">
              By purchasing a protocol, you affirm that:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>You are at least 18 years of age</li>
              <li>You are responsible for your own decisions and actions</li>
              <li>You will consult licensed professionals as appropriate</li>
              <li>You understand participation is voluntary</li>
            </ul>
            <p className="leading-relaxed mt-3">
              You assume full responsibility for how you apply any information
              provided.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 8 — RESULTS DISCLAIMER
            </h2>
            <p className="leading-relaxed">
              Outcomes vary based on individual biology, consistency, context,
              and participation.
            </p>
            <p className="leading-relaxed mt-3">
              Bio Signals makes no guarantees, representations, or warranties
              regarding results or outcomes.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 9 — PAYMENT TERMS
            </h2>
            <p className="leading-relaxed">All purchases are:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>One-time payments</li>
              <li>For a defined protocol duration (typically 3 months)</li>
              <li>Not subscriptions</li>
              <li>Not recurring unless explicitly stated</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Prices are listed clearly at checkout.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 10 — REFUNDS & CANCELLATIONS
            </h2>
            <p className="leading-relaxed">
              Due to the digital nature of services and the preparation and
              shipment of protocol materials:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Refunds are not available once onboarding or fulfillment has begun</li>
              <li>Please review all information carefully before purchase</li>
              <li>Contact support prior to purchase if clarification is needed</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 11 — INTELLECTUAL PROPERTY
            </h2>
            <p className="leading-relaxed">
              All content, materials, protocols, frameworks, and documentation
              are the intellectual property of Bio Signals.
            </p>
            <p className="leading-relaxed mt-3">
              You may not reproduce, distribute, or resell any materials without
              express written permission.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 12 — LIMITATION OF LIABILITY
            </h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, Bio Signals shall not be
              liable for any direct, indirect, incidental, or consequential
              damages arising from use of the services or materials.
            </p>
            <p className="leading-relaxed mt-3">
              Participation is voluntary and at your own risk.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 13 — INDEMNIFICATION
            </h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless Bio Signals from any
              claims, damages, or liabilities arising from your participation,
              use of materials, or violation of these Terms.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 14 — MODIFICATIONS TO TERMS
            </h2>
            <p className="leading-relaxed">
              Bio Signals reserves the right to update or modify these Terms at
              any time.
            </p>
            <p className="leading-relaxed mt-3">
              Continued use of the website or services constitutes acceptance of
              any revised Terms.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 15 — GOVERNING LAW
            </h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Bio Signals operates.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 16 — CONTACT INFORMATION
            </h2>
            <p className="leading-relaxed">
              For questions regarding these Terms, contact:
            </p>
            <p className="leading-relaxed mt-2">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-foreground underline hover:no-underline"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
