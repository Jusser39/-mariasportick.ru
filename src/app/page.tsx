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
    <main className="relative overflow-x-clip">
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
