import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import LogoTicker from '../components/sections/LogoTicker';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import AboutBITS from '../components/sections/AboutBITS';

export default function Home() {
  return (
    <main className="min-h-screen bg-bpcc-cream">
      <Navbar />

      <Hero />

      <LogoTicker />

      <Services />

      <Projects />

      <Team />

      <Testimonials />

      <section id="contact" className="py-24 text-center bg-bpcc-cream border-t border-black/10">
        <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
          Ready to solve your toughest challenges?
        </h2>
        <p className="text-black/60 mb-8 max-w-lg mx-auto">
          Partner with the premier student consulting body of BITS Pilani.
        </p>
        <button className="bg-bpcc-gold text-white px-10 py-4 font-bold rounded-sm hover:bg-white hover:text-bpcc-navy transition-all shadow-lg">
          Start a Conversation
        </button>
      </section>

      <AboutBITS />
    </main>
  );
}