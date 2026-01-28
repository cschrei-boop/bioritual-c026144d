import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index";
import ProductBioSignals from "./pages/ProductBioSignals";
import ProductBioSignalsEnergy from "./pages/ProductBioSignalsEnergy";
import ProductBioSignalsPerformance from "./pages/ProductBioSignalsPerformance";
import ProductBioSignalsHairSkin from "./pages/ProductBioSignalsHairSkin";
import ProductBioSignalsLongevity from "./pages/ProductBioSignalsLongevity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/protocol/bio-signals-weight-loss" element={<ProductBioSignals />} />
      <Route path="/protocol/bio-signals-energy" element={<ProductBioSignalsEnergy />} />
      <Route path="/protocol/bio-signals-performance-recovery" element={<ProductBioSignalsPerformance />} />
      <Route path="/protocol/bio-signals-hair-skin" element={<ProductBioSignalsHairSkin />} />
      <Route path="/protocol/bio-signals-longevity" element={<ProductBioSignalsLongevity />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
