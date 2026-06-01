import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-[#FF4500] selection:text-white antialiased overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white">
        <span className="text-xs font-medium tracking-[0.4em] uppercase text-[#FAFAFA]">Langenkämper</span>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-xs uppercase tracking-[0.2em] hover:text-[#FF4500] transition-colors duration-500 bg-white/5 backdrop-blur-md px-5 py-3 border border-white/10"
        >
          Menü
        </button>
      </nav>

      {/* Menü Overlay - Strukturiert */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A] text-white flex flex-col justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 md:right-12 p-2 text-white hover:text-[#FF4500] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
              <ul className="space-y-6 md:space-y-10">
                {[
                  { id: "01", name: "Startseite" },
                  { id: "02", name: "Exzellenz" },
                  { id: "03", name: "Kompetenz" },
                  { id: "04", name: "Kontakt" }
                ].map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-baseline gap-6 group"
                  >
                    <span className="text-xs font-mono text-[#FF4500]">{item.id}</span>
                    <a 
                      href={`#${item.name.toLowerCase()}`} 
                      onClick={() => setIsMenuOpen(false)} 
                      className="text-4xl md:text-6xl font-medium tracking-tighter uppercase text-stone-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="hidden md:flex flex-col gap-12 border-l border-white/10 pl-16"
              >
                <div>
                  <span className="text-[#FF4500] text-xs uppercase tracking-[0.2em] font-bold block mb-4">Firmensitz</span>
                  <p className="text-stone-400 font-light leading-relaxed">
                    René Langenkämper<br/>
                    Dachdeckerbetrieb<br/>
                    Cremlingen / Braunschweig
                  </p>
                </div>
                <div>
                  <span className="text-[#FF4500] text-xs uppercase tracking-[0.2em] font-bold block mb-4">Kontakt</span>
                  <p className="text-stone-400 font-light leading-relaxed">
                    info@dach-braunschweig.de<br/>
                    +49 (0) 123 456 789
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO - Cinematic & Tech-Experience */}
      <section id="startseite" className="relative h-screen flex flex-col justify-end p-6 md:p-12 pb-24 overflow-hidden bg-[#000000]">
        <motion.div 
          initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
          animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
            alt="Moderne Dacharchitektur"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-2 h-2 bg-[#FF4500] rounded-full animate-pulse" />
            <span className="text-[#FF4500] uppercase tracking-[0.3em] text-xs font-bold">
              Architektonische Exzellenz // Braunschweig
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl lg:text-[11rem] text-white font-medium tracking-tighter leading-[0.85] mb-8 uppercase"
          >
            Industrie <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#777]">Standard.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="max-w-lg md:ml-auto flex flex-col items-start md:items-end md:text-right"
          >
            <p className="text-stone-400 font-light leading-relaxed mb-8 text-lg md:text-xl">
              René Langenkämper. Wir verschmelzen 40 Jahre meisterhafte Handwerkstradition mit digitaler Innovation.
            </p>
            <a href="#kontakt" className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-white border-b border-white/20 pb-4 hover:border-[#FF4500] transition-colors duration-500">
              Tech-Experience starten <ArrowUpRight className="w-4 h-4 group-hover:text-[#FF4500] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. EXZELLENZ - Editorial / Makro-Texturen / Parallax */}
      <section id="exzellenz" className="py-32 md:py-56 px-6 md:px-12 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-[#FF4500]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-12 gap-16 md:gap-24 items-start relative z-10">
          
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tighter leading-[1] mb-8 uppercase">
                Präzision <br/> auf jedem <br/> <span className="text-[#FF4500]">Niveau.</span>
              </h2>
              <div className="space-y-6 text-lg text-stone-400 font-light leading-relaxed max-w-md">
                <p>
                  „Wir sind erst zufrieden, wenn Sie es sind.“ Diese Philosophie treibt uns seit 1986 an. Aus Cremlingen agierend, definieren 10 hochqualifizierte Experten das Dachdeckerhandwerk neu.
                </p>
                <p>
                  Unsere modernen Einsatzfahrzeuge und professionelle Technik garantieren eine Ausführung, die höchsten architektonischen Ansprüchen gerecht wird.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-32 mt-20 lg:mt-0">
            <motion.div 
              style={{ y: yParallax }}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group ml-auto w-full md:w-[80%]"
            >
              <motion.div 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1517581177682-a085eb7fac11?q=80&w=2946&auto=format&fit=crop" 
                  alt="Schiefer Textur Makro" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2s]"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 bg-[#050505] p-6 border-t border-r border-white/10">
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF4500] font-bold">01 // Material</span>
                <p className="text-white mt-2 text-sm tracking-wide">Taktile Schiefer-Strukturen</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KOMPETENZ - Reveal Effects & Tech-List */}
      <section id="kompetenz" className="py-32 md:py-48 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <span className="text-[#FF4500] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              System-Integration
            </span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase text-white">
              Spezifikation
            </h2>
          </motion.div>
          
          <div className="flex flex-col w-full">
            {[
              { id: "01", category: "Beraten", title: "Dach & Fassadenarchitektur", desc: "Komplexe Flachdachabdichtungen, Steildachkonstruktionen und hochmoderne Fassadenbekleidungen." },
              { id: "02", category: "Planen", title: "Präzisions-Bauklempnerei", desc: "Maßgefertigte Metalldetails und nahtlose Integration innovativer Wohndachfenster-Systeme." },
              { id: "03", category: "Ausführen", title: "Bespoke Design & Support", desc: "Individuelle Design-Detailausführungen und die agile, helfende Hand für jedes Bauprojekt." }
            ].map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="group relative border-b border-white/10 py-12 md:py-16 cursor-crosshair overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#FF4500]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <div className="relative z-10 grid md:grid-cols-12 gap-6 md:gap-12 items-baseline">
                  <div className="md:col-span-2 text-[#FF4500] font-mono text-xl tracking-tighter">
                    {item.id}
                  </div>
                  <div className="md:col-span-3 text-xs uppercase tracking-[0.2em] text-stone-500 group-hover:text-white transition-colors duration-300">
                    {item.category}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white group-hover:translate-x-4 transition-transform duration-500">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-3 text-sm text-stone-400 font-light leading-relaxed group-hover:text-stone-300 transition-colors duration-300">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE LAYER - Cinematic Widescreen Scroll Reveal */}
      <section className="py-24 bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, width: "80%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto aspect-[21/9] md:aspect-[25/9] overflow-hidden bg-[#111111] relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2940&auto=format&fit=crop" 
            alt="Dachlandschaft Drohne" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 hover:scale-100 transition-transform duration-[4s] ease-out"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-white/20 text-[15vw] font-bold tracking-tighter uppercase whitespace-nowrap mix-blend-overlay">
              Zukunft Bauen
            </p>
          </div>
        </motion.div>
      </section>

      {/* 5. KONTAKT - Puristisches End-Statement */}
      <section id="kontakt" className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] relative flex justify-center items-center border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0A0A0A] border border-white/10 p-12 md:p-24"
          >
            <span className="text-[#FF4500] uppercase tracking-[0.3em] text-xs font-bold mb-8 block flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#FF4500]"></span>
              Projekt Initiieren
              <span className="w-8 h-[1px] bg-[#FF4500]"></span>
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-16 leading-[0.9] text-white uppercase">
              Vision <br/> Realität.
            </h2>
            <button className="group bg-white text-[#050505] px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF4500] hover:text-white transition-all duration-500">
              <span className="flex items-center gap-3">
                Verbindung herstellen
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
