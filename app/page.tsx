import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseMe from "@/components/WhyChooseMe";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Process from "@/components/Process";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseMe />
      <Services />
      <TechStack />
      <Projects />
      <Timeline />
      <Process />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
