import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index";
import ProductBioSignals from "./pages/ProductBioSignals";
import ProductBioSignalsEnergy from "./pages/ProductBioSignalsEnergy";
import ProductBioSignalsPerformance from "./pages/ProductBioSignalsPerformance";
import ProductBioSignalsHairSkin from "./pages/ProductBioSignalsHairSkin";
import ProductBioSignalsLongevity from "./pages/ProductBioSignalsLongevity";
import ProductBioSignalsCognition from "./pages/ProductBioSignalsCognition";
import ProductAIConcierge from "./pages/ProductAIConcierge";
import ProductCoaching from "./pages/ProductCoaching";
import StartHere from "./pages/StartHere";
import Protocols from "./pages/Protocols";
import WeightLossLanding from "./pages/WeightLossLanding";
import TermsOfService from "./pages/TermsOfService";
import FulfillmentPolicy from "./pages/FulfillmentPolicy";
import ConsentAcknowledgment from "./pages/ConsentAcknowledgment";
import AIConcierge from "./pages/AIConcierge";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/start-here" element={<StartHere />} />
      <Route path="/protocols" element={<Protocols />} />
      <Route path="/weight-loss-structured-wellness" element={<WeightLossLanding />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/fulfillment" element={<FulfillmentPolicy />} />
      <Route path="/consent" element={<ConsentAcknowledgment />} />
      <Route path="/protocol/bio-signals-weight-loss" element={<ProductBioSignals />} />
      <Route path="/protocol/bio-signals-energy" element={<ProductBioSignalsEnergy />} />
      <Route path="/protocol/bio-signals-performance-recovery" element={<ProductBioSignalsPerformance />} />
      <Route path="/protocol/bio-signals-hair-skin" element={<ProductBioSignalsHairSkin />} />
      <Route path="/protocol/bio-signals-longevity" element={<ProductBioSignalsLongevity />} />
      <Route path="/protocol/bio-signals-cognition" element={<ProductBioSignalsCognition />} />
      <Route path="/ai-concierge" element={<AIConcierge />} />
      <Route path="/coaching" element={<ProductCoaching />} />
      <Route path="/coaching" element={<ProductCoaching />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
