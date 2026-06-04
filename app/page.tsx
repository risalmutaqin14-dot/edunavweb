import Hero from "@/components/landingpage/Hero";
import About from "@/components/landingpage/About";
import Benefits from "@/components/landingpage/Benefits";
import Partners from "@/components/landingpage/Partners";
import FAQ from "@/components/landingpage/FAQ";
import Contact from "@/components/landingpage/Contact";
import WhyChooseUs from "@/components/landingpage/WhyChooseUs";
import FeatureHighlights from "@/components/landingpage/FeaturesHighlights";
import FeaturesEdunav from "@/components/landingpage/FeaturesEdunav";
import BlogSection from "@/components/landingpage/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Benefits />
      <FeatureHighlights />
      <FeaturesEdunav />
      <Partners />
      <BlogSection />
      <FAQ />
      <Contact />
    </>
  );
}
