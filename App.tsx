import { motion } from "motion/react";
import { ArrowRight, Hammer, CheckCircle, PenTool } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-stone-200">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center text-white/90">
        <span className="font-serif text-xl tracking-wide font-medium">Langenkämper.</span>
        <button className="text-sm uppercase tracking-widest hover:text-white transition-colors">
          Menü
        </button>
      </nav>

      {/* 1. HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1632733711675-3fbdf3923d73?q=80&w=2940&auto=format&fit=crop"
            alt="Dachdecker Braunschweig"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-[1.1]"
          >
            Ihr Dachdecker in Braunschweig.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-stone-200 font-light tracking-wide max-w-2xl mx-auto"
          >
            Herzlich willkommen bei René Langenkämper, dem Dachdeckerbetrieb und Baudienstleister für den Großraum Braunschweig. 
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 text-sm uppercase tracking-widest hover:bg-stone-100 transition-colors">
              Anfrage starten <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. PROMISE */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-stone-400 uppercase tracking-widest text-xs font-semibold mb-6 block">Unsere Firmenphilosophie</span>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-stone-800 mb-8">
            „Wir sind erst zufrieden, <br className="hidden md:block"/>
            wenn Sie es sind!“
          </h2>
          <p className="text-stone-500 font-light text-lg leading-relaxed max-w-2xl mx-auto">
            40 Jahre Berufserfahrung sollen Ihr Vorteil sein. Unser regionaler Betrieb aus Cremlingen bei Braunschweig beschäftigt 10 qualifizierte Mitarbeiter mit umfangreichem Fertigungs-Know-How. Professionelle Technik und modern ausgestattete Einsatzfahrzeuge garantieren Ihnen besten Service.
          </p>
          <div className="w-16 h-[1px] bg-stone-300 mx-auto mt-12"></div>
        </div>
      </section>

      {/* 3. DETAILS (Leistungen) */}
      <section className="py-20 bg-stone-100/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-stone-800 uppercase tracking-widest text-sm font-semibold">
              Beraten │ Planen │ Ausführen
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-stone-200 rounded-full flex justify-center items-center mb-6 text-stone-600">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Dach & Fassade</h3>
              <p className="text-stone-500 font-light leading-relaxed">Von der Flachdachabdichtung über die klassische Steildacheindeckung bis hin zur modernen Fassadenbekleidung.</p>
            </motion.div>

            <motion.div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-stone-200 rounded-full flex justify-center items-center mb-6 text-stone-600">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Details & Fenster</h3>
              <p className="text-stone-500 font-light leading-relaxed">Fachmännische Bauklempnerei, Einbau von Wohndachfenstern und besondere Design-Detailausführungen.</p>
            </motion.div>

            <motion.div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-stone-200 rounded-full flex justify-center items-center mb-6 text-stone-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Die helfende Hand</h3>
              <p className="text-stone-500 font-light leading-relaxed">Als moderner Bauhandwerksbetrieb sind wir nicht nur für Großprojekte da, sondern bieten auch einfach „nur“ die helfende Hand, wenn Sie sie brauchen.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section id="cta" className="bg-stone-900 text-white py-24 px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">Bereit für Ihr Projekt?</h2>
        <p className="text-stone-400 mb-12 max-w-xl mx-auto">
          Nutzen Sie unsere 40 Jahre Berufserfahrung für Ihr nächstes Bauvorhaben in Braunschweig und Umgebung.
        </p>
        <button className="bg-white text-stone-900 px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-stone-200 transition">
          Kontakt aufnehmen
        </button>
      </section>
    </div>
  );
}
