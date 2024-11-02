import CallToAction from "@/components/sections/call-to-action";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import LogoTicket from "@/components/sections/logo-ticket";
import Pricing from "@/components/sections/pricing";
import ProductShowcase from "@/components/sections/product-showcase";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicket />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
