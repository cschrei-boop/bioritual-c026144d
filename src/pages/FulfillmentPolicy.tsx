import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "January 28, 2025";
const SUPPORT_EMAIL = "support@biosignals.com";

const FulfillmentPolicy = () => {
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
          Fulfillment & Shipping Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="space-y-10 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 1 — OVERVIEW
            </h2>
            <p className="leading-relaxed">
              Bio Signals protocols are time-bound educational and lifestyle
              optimization services that may include protocol-related materials
              and printed educational resources shipped as part of participation.
            </p>
            <p className="leading-relaxed mt-3">
              This policy explains how fulfillment and shipping work.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 2 — WHAT IS FULFILLED
            </h2>
            <p className="leading-relaxed">
              When you enroll in a Bio Signals protocol, fulfillment may include:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Activation of your digital access (private client wiki and educational materials)</li>
              <li>Onboarding and protocol setup</li>
              <li>Shipment of non-itemized protocol materials and printed educational resources</li>
            </ul>
            <p className="leading-relaxed mt-3 font-medium">
              You are not purchasing individual physical products.
            </p>
            <p className="leading-relaxed mt-1">
              All materials are provided only within the context of an active protocol.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 3 — DIGITAL FULFILLMENT
            </h2>
            <p className="leading-relaxed">
              Digital access typically includes:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Protocol onboarding instructions</li>
              <li>Access to your private client wiki</li>
              <li>Educational content and references</li>
              <li>Tracking and accountability tools</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Digital access is usually provided shortly after purchase, once
              onboarding steps are completed.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 4 — PHYSICAL SHIPMENTS
            </h2>
            <p className="leading-relaxed">
              Some protocols include physical protocol materials, which may be
              shipped to you as part of the overall experience.
            </p>
            <p className="leading-relaxed mt-3">Important details:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Materials are not sold separately</li>
              <li>Materials are not itemized or priced individually</li>
              <li>Materials have no standalone retail value</li>
              <li>Materials are shipped only to active protocol participants</li>
            </ul>
            <p className="leading-relaxed mt-3">
              These materials are intended solely to support participation in the
              protocol.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 5 — SHIPPING TIMELINES
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Shipping typically begins after onboarding is completed</li>
              <li>Estimated shipping timelines are communicated after purchase</li>
              <li>Timelines may vary based on location, availability, and processing requirements</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Shipping times are estimates only and not guaranteed.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 6 — SHIPPING ADDRESSES
            </h2>
            <p className="leading-relaxed">
              Participants are responsible for providing an accurate shipping
              address during onboarding.
            </p>
            <p className="leading-relaxed mt-3">
              Bio Signals is not responsible for delays or losses due to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Incorrect addresses</li>
              <li>Incomplete address information</li>
              <li>Address changes not communicated in time</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 7 — SHIPPING COSTS
            </h2>
            <p className="leading-relaxed">
              Shipping costs, if applicable, are either:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Included in the protocol price, or</li>
              <li>Clearly communicated during onboarding</li>
            </ul>
            <p className="leading-relaxed mt-3">
              There are no separate shipping line items for individual materials.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 8 — INTERNATIONAL SHIPPING
            </h2>
            <p className="leading-relaxed">
              International shipping availability may vary.
            </p>
            <p className="leading-relaxed mt-3">
              Participants are responsible for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Local regulations</li>
              <li>Customs requirements</li>
              <li>Duties, taxes, or fees imposed by their jurisdiction</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Bio Signals is not responsible for delays, seizures, or restrictions
              imposed by customs authorities.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 9 — LOST OR DELAYED SHIPMENTS
            </h2>
            <p className="leading-relaxed">
              If a shipment is delayed or lost:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Contact support as soon as possible</li>
              <li>We will review the situation on a case-by-case basis</li>
              <li>Replacement or reshipment is not guaranteed and is at Bio Signals' discretion</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 10 — NO RETURNS
            </h2>
            <p className="leading-relaxed">
              Due to the nature of the services and materials provided:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Physical protocol materials are not returnable</li>
              <li>Digital access and services are non-refundable once fulfillment has begun</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Please review all information carefully before purchase.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 11 — CHANGES TO FULFILLMENT
            </h2>
            <p className="leading-relaxed">
              Bio Signals reserves the right to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li>Modify fulfillment methods</li>
              <li>Adjust shipping timelines</li>
              <li>Substitute equivalent protocol materials</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Any changes will not alter the educational nature of the protocol.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-serif text-xl font-semibold mb-4">
              SECTION 12 — CONTACT INFORMATION
            </h2>
            <p className="leading-relaxed">
              For questions regarding fulfillment or shipping, contact:
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

export default FulfillmentPolicy;
