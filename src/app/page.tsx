import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { PriceList } from "@/components/sections/price-list";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingMessenger } from "@/components/floating-messenger";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <PriceList />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingMessenger />
      <MobileStickyBar />
    </>
  );
}
