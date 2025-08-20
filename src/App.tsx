import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Sustainability from "./pages/Sustainability";
import CSR from "./pages/CSR";
import OurFarm from "./pages/OurFarm";
import Products from "./pages/Products";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";
import QuoteRequest from "./pages/QuoteRequest";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

// Page Transition Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Add page enter animation class
    const timer = setTimeout(() => {
      document.body.classList.add('page-enter');
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location]);

  return <div className="page-enter">{children}</div>;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/sustainability" element={<Sustainability />} />
                  <Route path="/csr" element={<CSR />} />
                  <Route path="/our-farm" element={<OurFarm />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/newsletter" element={<Newsletter />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/quote-request" element={<QuoteRequest />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
