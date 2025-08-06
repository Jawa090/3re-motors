
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Inventory from "./pages/Inventory";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SellCar from "./pages/SellCar";
import BuyImportServices from "./pages/BuyImportServices";
import OtherServices from "./pages/OtherServices";
import CarInspection from "./pages/CarInspection";
import CarRepair from "./pages/CarRepair";
import CarDetailing from "./pages/CarDetailing";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import EscrowService from "./pages/EscrowService";
import AuctionSheetVerification from "./pages/AuctionSheetVerification";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/finance" element={<BuyImportServices />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/car-inspection" element={<CarInspection />} />
          <Route path="/car-repair" element={<CarRepair />} />
          <Route path="/car-detailing" element={<CarDetailing />} />
          <Route path="/escrow-service" element={<EscrowService />} />
          <Route path="/auction-sheet-verification" element={<AuctionSheetVerification />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloatButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
