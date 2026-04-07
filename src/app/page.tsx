import Header from "../components/landing/Header.jsx"
import Hero from "../components/landing/Hero.jsx"
import HowItWorks from "../components/landing/HowItWorks.jsx"
import WhatToAsk from "../components/landing/WhatToAsk.jsx"
import CTA from "../components/landing/CTA.jsx"
import PricingSection from "../components/landing/PricingSection.jsx"
import Footer from "../components/landing/Footer.jsx"

export default function Home() {
  return (
   <div className="min-h-screen bg-background">
    <Header/>
    <Hero/>
    <HowItWorks/>
    <WhatToAsk/>
    <PricingSection/>
    <CTA/>
    <Footer/>

   </div>
  );
}
