import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-[#B87333] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 p-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <span className="text-sm font-bold tracking-widest uppercase">Langenkämper.</span>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-xs uppercase tracking-widest hover:text-[#B87333] transition-colors duration-300"
        >
          Menü
        </button>
      </nav>

      {/* Vollbild-Menü Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#111111] text-white flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 md:right-12 p-2 text-white hover:text-[#B87333] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <ul className="text-center space-y-8 text-3xl md:text-5xl font-medium tracking-tighter">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-[#B87333] transition-colors">Startseite</a></li>
              <li><a href="#philosophie" onClick={() => setIsMenuOpen(false)} className="hover:text-[#B87333] transition-colors">Philosophie</a></li>
              <li><a href="#leistungen" onClick={() => setIsMenuOpen(false)} className="hover:text-[#B87333] transition-colors">Leistungen</a></li>
              <li><a href="#cta" onClick={() => setIsMenuOpen(false)} className="hover:text-[#B87333] transition-colors">Kontakt</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO */}
      <section id="home" className="relative h-screen flex flex-col justify-end p-6 md:p-12 pb-24 overflow-hidden bg-[#111111]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
            alt="Moderne Dacharchitektur"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#B87333] uppercase tracking-[0.2em] text-xs font-bold mb-6"
          >
            Ihr Dachdecker in Braunschweig
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] text-white font-medium tracking-tighter leading-[0.85] mb-8"
          >
            HERZLICH <br/> WILLKOMMEN.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-md"
          >
            <p className="text-stone-300 font-light leading-relaxed mb-8 text-lg">
              Bei René Langenkämper, dem Dachdeckerbetrieb und Baudienstleister für den Großraum Braunschweig.
            </p>
            <a href="#cta" className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-2 hover:border-[#B87333] transition-colors duration-300">
              Projekt starten <ArrowUpRight className="w-4 h-4 group-hover:text-[#B87333] transition-colors" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHIE */}
      <section id="philosophie" className="py-32 md:py-48 px-6 md:px-12 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <span className="text-[#B87333] uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
              40 Jahre Berufserfahrung
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#111111] font-medium tracking-tighter leading-[1.1] mb-8">
              Wir sind erst zufrieden, wenn Sie es sind.
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed mb-6">
              Unser regionaler Betrieb aus Cremlingen beschäftigt 10 qualifizierte Mitarbeiter mit umfangreichem Fertigungs-Know-How.
            </p>
            <p className="text-stone-500 font-light leading-relaxed">
              Professionelle Technik und modern ausgestattete Einsatzfahrzeuge garantieren Ihnen besten Service und hochwertig-professionelle Qualitätsarbeit.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:col-span-7 aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1517581177682-a085eb7fac11?q=80&w=2946&auto=format&fit=crop" 
              alt="Architektur Detail Ziegelstruktur" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s]"
            />
          </motion.div>

        </div>
      </section>

      {/* 3. LEISTUNGEN */}
      <section id="leistungen" className="py-32 px-6 md:px-12 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#B87333] uppercase tracking-[0.2em] text-xs font-bold mb-16 block">
            Portfolio
          </span>
          
          <div className="flex flex-col border-t border-white/10">
            {[
              { title: "Beraten", desc: "Von der Flachdachabdichtung bis zur professionellen Bauklempnerei." },
              { title: "Planen", desc: "Steildacheindeckung, Fassadenbekleidung und moderne Wohndachfenster." },
              { title: "Ausführen", desc: "Besondere Design-Detailausführungen oder einfach 'nur' die helfende Hand." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-12 gap-8 py-16 border-b border-white/10 group cursor-pointer"
              >
                <h3 className="md:col-span-5 text-4xl md:text-6xl font-medium tracking-tighter text-stone-500 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="md:col-span-7 text-stone-400 font-light text-xl md:text-2xl leading-relaxed group-hover:text-stone-200 transition-colors duration-500 flex items-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA mit neuem Bild im weißen Bereich */}
      <section id="cta" className="py-32 md:py-48 px-6 md:px-12 bg-[#F9F9F9] flex flex-col justify-center items-center">
        
        {/* Neues Bild */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto mb-24 aspect-[21/9] overflow-hidden bg-stone-200"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2940&auto=format&fit=crop" 
            alt="Moderne Architektur Dachlandschaft" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s]"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-[#B87333] uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
            Ihre Vision. Unser Handwerk.
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-[#111111] font-medium tracking-tighter mb-12 leading-[0.9]">
            Architektur <br/> vollenden.
          </h2>
          <button className="bg-[#111111] text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#B87333] transition-colors duration-500">
            Kontakt aufnehmen
          </button>
        </motion.div>
      </section>
    </div>
  );
}
