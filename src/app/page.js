import Hero from "@/components/Hero";
import Features from "@/components/Features"; 
import About from "@/components/About";       
import Facilities from "@/components/Facilities"; 
import Academics from "@/components/Academics"; 
import Activities from "@/components/Activities";
import Admissions from "@/components/Admissions"; 
import Contact from "@/components/Contact";      
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <About />
      <Facilities />
      <Academics />
      <Activities />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}