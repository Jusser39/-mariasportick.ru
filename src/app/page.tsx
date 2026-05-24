import { About } from "@/components/sections/About";
import { Cta } from "@/components/sections/Cta";
import { ChatBotWidget } from "@/components/sections/ChatBotWidget";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { LeadForm } from "@/components/sections/LeadForm";
import { Navbar } from "@/components/sections/Navbar";
import { Results } from "@/components/sections/Results";
import { Routine } from "@/components/sections/Routine";
import { Services } from "@/components/sections/Services";
import { StartPlan } from "@/components/sections/StartPlan";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main className="site-shell relative overflow-x-clip">
      <div className="site-3d site-3d-a" aria-hidden="true" />
      <div className="site-3d site-3d-b" aria-hidden="true" />
      <div className="site-3d site-3d-c" aria-hidden="true" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <StartPlan />
      <Results />
      <Routine />
      <Testimonials />
      <Faq />
      <Cta />
      <LeadForm />
      <Footer />
      <ChatBotWidget />
    </main>
  );
}
