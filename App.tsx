import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#111111] font-sans selection:bg-[#B87333] selection:text-white antialiased overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white">
        <span className="text-sm font-bold tracking-[0.3em] uppercase">Langenkämper.</span>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-xs uppercase tracking-[0.2em] hover:text-[#B87333] transition-colors duration-300 bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10"
        >
          Menü
        </button>
      </nav>

      {/* Vollbild-Menü Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#111111] text-white flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 md:right-12 p-2 text-white hover:text-[#B87333] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <ul className="text-center space-y-8 text-4xl md:text-6xl font-medium tracking-tighter">
              {["Startseite", "Philosophie", "Leistungen", "Kontakt"].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="hover:text-[#B87333] transition-colors block py-2">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO (Beibehalten wie gewünscht) */}
      <section id="startseite" className="relative h-screen flex flex-col justify-end p-6 md:p-12 pb-24 overflow-hidden bg-[#111111]">
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
            <a href="#kontakt" className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-2 hover:border-[#B87333] transition-colors duration-300">
              Projekt starten <ArrowUpRight className="w-4 h-4 group-hover:text-[#B87333] transition-colors" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHIE - Ultra-modernes asymmetrisches Split-Layout */}
      <section id="philosophie" className="py-32 md:py-56 px-6 md:px-12 bg-[#F4F4F4] relative">
        {/* Große, dezente Hintergrundschrift für den Engineering-Look */}
        <div className="absolute right-0 top-10 text-[12vw] font-bold text-stone-200/50 select-none tracking-tighter pointer-events-none uppercase">
          EST. 1986
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 sticky top-32"
          >
            <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Firmenphilosophie // 40 Jahre Expertise
            </span>
            <h2 className="text-5xl md:text-7xl text-[#111111] font-medium tracking-tight leading-[0.95] mb-8">
              Wir sind erst zufrieden, wenn Sie es sind.
            </h2>
            <div className="h-[2px] w-20 bg-[#B87333] mb-8"></div>
          </motion.div>

          <div className="lg:col-span-7 space-y-24 md:pl-12">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] bg-stone-900 overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1517581177682-a085eb7fac11?q=80&w=2946&auto=format&fit=crop" 
                alt="Makro-Detailaufnahmen" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-80"
              />
              <div className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-widest bg-[#111111]/80 backdrop-blur-md p-4">
                01 // Präzision im Detail
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-xl space-y-6 text-xl md:text-2xl text-stone-600 font-light leading-relaxed"
            >
              <p>
                Unser regionaler Betrieb aus <span className="text-[#111111] font-normal">Cremlingen bei Braunschweig</span> beschäftigt 10 qualifizierte Mitarbeiter mit umfangreichem Fertigungs-Know-How.
              </p>
              <p className="text-base text-stone-400 font-sans tracking-wide">
                Professionelle Technik und modern ausgestattete Einsatzfahrzeuge garantieren Ihnen besten Service und hochwertig-professionelle Qualitätsarbeit auf jedem architektonischen Niveau.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LEISTUNGEN - Dynamische Full-Screen-Interaktion */}
      <section id="leistungen" className="py-32 md:py-48 bg-[#111111] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                Leistungsspektrum // Kompetenzen
              </span>
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter uppercase">
                BERATEN <br/> PLANEN <br/> AUSFÜHREN
              </h2>
            </div>
          </div>
          
          <div className="mt-12 divide-y divide-white/10">
            {[
              { num: "01", title: "Dach & Fassade", desc: "Flachdachabdichtung, klassische Steildacheindeckung sowie anspruchsvolle Fassadenbekleidung aus einer Hand." },
              { num: "02", title: "Bauklempnerei & Fenster", desc: "Perfekt ausgeführte Metallarbeiten am Dach und passgenaue Integration moderner Wohndachfenster." },
              { num: "03", title: "Design & Speziallösungen", desc: "Besondere Design-Detailausführungen für anspruchsvolle Architektur – oder einfach flexibel die helfende Hand." }
            ].map((item) => (
              <motion.div 
                key={item.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-6 py-12 items-start group hover:bg-white/[0.02] transition-colors duration-500 px-4"
              >
                <div className="lg:col-span-2 text-[#B87333] font-mono text-lg tracking-widest">
                  {item.num} //
                </div>
                <h3 className="lg:col-span-4 text-2xl md:text-4xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="lg:col-span-6 text-stone-400 font-light text-lg leading-relaxed group-hover:text-stone-200 transition-colors duration-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERMEDIATE SCROLL EXPERIENCE - Ästhetisches Widescreen-Highlight */}
      <section className="bg-[#111111] pb-32 md:pb-48 px-4 md:px-12">
        <motion.div 
          initial={{ opacity: 0, clipPath: "inset(10% 0% 10% 0%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto aspect-[21/9] overflow-hidden bg-stone-800 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2940&auto=format&fit=crop" 
            alt="Moderne Architektur Dachlandschaft" 
            className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        </motion.div>
      </section>

      {/* 5. CTA / KONTAKT - Minimaler, kraftvoller Abschluss */}
      <section id="kontakt" className="py-32 md:py-56 px-6 md:px-12 bg-[#F4F4F4] relative flex justify-center items-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs font-bold mb-8 block">
            Gemeinsames Vorhaben // Kontakt
          </span>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-16 leading-[0.9] text-[#111111]">
            ARCHITEKTUR <br/> VOLLENDEN.
          </h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <button className="bg-[#111111] text-white px-16 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#B87333] transition-colors duration-500 shadow-xl">
              Jetzt Gespräch vereinbaren
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
