import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToHashElement } from "./components/ScrollToHashElement";
import Home from "./pages/Home";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <div className="min-h-screen bg-frost text-forest selection:bg-mint selection:text-forest overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
