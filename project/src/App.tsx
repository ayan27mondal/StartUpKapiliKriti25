import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "@/lib/i18n"; // Import i18n config
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/loading";
import { PreferredLanguage } from "@/pages/PreferredLanguage"; 
import { LoginPage } from "@/pages/auth/login";
import { RegisterPage } from "@/pages/auth/register";
import { MarketplacePage } from "@/pages/marketplace";
import { FarmerDashboard } from "@/pages/dashboard/farmer";
import { AboutPage } from "@/pages/about";
import { ContactPage } from "@/pages/contact";
import { FAQPage } from "@/pages/faq";
import { HowItWorksPage } from "@/pages/how-it-works";
import { HomePage } from "@/pages/home";  // ✅ Restore Home Page
import { CheckoutPage } from "@/pages/checkout";
import { CartPage } from "@/pages/cart";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]); // ✅ Global cart state
  const [languageSelected, setLanguageSelected] = useState(!!localStorage.getItem("language"));
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show language selection page if no language is selected
  if (!languageSelected) {
    return <PreferredLanguage onSelectLanguage={() => setLanguageSelected(true)} />;
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header cartCount={cart.length} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />  {/* ✅ Home Page restored */}
            <Route path="/marketplace" element={<MarketplacePage cart={cart} setCart={setCart} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<FarmerDashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
