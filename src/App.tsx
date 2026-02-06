import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index";
import ProductAIConcierge from "./pages/ProductAIConcierge";
import ProductCoaching from "./pages/ProductCoaching";
import StartHere from "./pages/StartHere";
import Protocols from "./pages/Protocols";
import ProtocolsCollection from "./pages/ProtocolsCollection";
import WeightLossLanding from "./pages/WeightLossLanding";
import TruthAboutPeptides from "./pages/TruthAboutPeptides";
import GLP1RetratutideGuide from "./pages/GLP1RetratutideGuide";
import GLP1Myths from "./pages/GLP1Myths";
import Blog from "./pages/Blog";
import TermsOfService from "./pages/TermsOfService";
import FulfillmentPolicy from "./pages/FulfillmentPolicy";
import ConsentAcknowledgment from "./pages/ConsentAcknowledgment";
import DynamicProduct from "./pages/DynamicProduct";
import CartRedirect from "./pages/CartRedirect";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/start-here" element={<StartHere />} />
        <Route path="/protocols" element={<Protocols />} />
        <Route path="/collection/protocols" element={<ProtocolsCollection />} />
        <Route path="/weight-loss-structured-wellness" element={<WeightLossLanding />} />
        <Route path="/truth-about-peptides" element={<TruthAboutPeptides />} />
        <Route path="/glp-1-retratutide-guide" element={<GLP1RetratutideGuide />} />
        <Route path="/glp-1-myths" element={<GLP1Myths />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/fulfillment" element={<FulfillmentPolicy />} />
        <Route path="/consent" element={<ConsentAcknowledgment />} />
        <Route path="/ai-concierge" element={<ProductAIConcierge />} />
        <Route path="/coaching" element={<ProductCoaching />} />
        {/* Dynamic Shopify product pages - works for ANY handle */}
        <Route path="/products/:handle" element={<DynamicProduct />} />
        {/* Legacy protocol URLs - render same DynamicProduct with handle resolution */}
        <Route path="/protocol/:handle" element={<DynamicProduct />} />
        <Route path="/cart" element={<CartRedirect />} />
        <Route path="/cart/:variantInfo" element={<CartRedirect />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
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
