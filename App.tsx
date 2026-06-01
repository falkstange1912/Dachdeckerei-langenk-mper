import { motion } from "motion/react";
import { ArrowRight, Hammer, Ruler, TreePine, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-stone-200">
      {/* Navbar (Minimal) */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center text-white/90">
        <span className="font-serif text-xl tracking-wide font-medium">HolzWerk.</span>
        <button className="text-sm uppercase tracking-widest hover:text-white transition-colors">
          Menü
        </button>
      </nav>

      {/* 1. HOOK / HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1611082531776-66efbb272a27?q=80&w=2940&auto=format&fit=crop"
            alt="Holzstruktur Detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.1]"
          >
            Meister des Holzbaus.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-stone-200 font-light tracking-wide"
          >
            Maßgeschreinerte Qualität, die Generationen überdauert.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 text-sm uppercase tracking-widest hover:bg-stone-100 transition-colors">
              Projekt Starten <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. PROMISE OF VALUE */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-stone-400 uppercase tracking-widest text-xs font-semibold mb-6 block">Unser Versprechen</span>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-stone-800">
            Wir verknüpfen traditionelle <br className="hidden md:block"/>
            Handwerkskunst mit modernem Design, <br className="hidden md:block"/>
            um Räume mit Charakter zu schaffen.
          </h2>
          <div className="w-16 h-[1px] bg-stone-300 mx-auto mt-12"></div>
        </div>
      </section>

      {/* 3. DETAILS (Concrete Points) */}
      <section className="py-20 bg-stone-100/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-stone-200 rounded-full flex justify-center items-center mb-6 text-stone-600">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Maßgeschneiderte Präzision</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                Jedes Möbelstück wird millimetergenau geplant und an Ihre spezifischen Raumgegebenheiten und Wünsche angepasst. Keine Kompromisse.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-stone-200 rounded-full flex justify-center items-center mb-6 text-stone-600">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Nachhaltige Materialien</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                Wir beziehen unsere Hölzer aus verantwortungsvoller Forstwirtschaft und veredeln sie mit natürlichen Ölen für ein gesundes Raumklima.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-stone-200 rounded-full flex justify-center items-center mb-6 text-stone-600">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Meisterliche Umsetzung</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                Als Familienbetrieb in der 4. Generation garantieren wir handwerkliche Perfektion von der ersten Skizze bis zur schlüsselfertigen Montage.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. PROOF (References / Projects) */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-stone-400 uppercase tracking-widest text-xs font-semibold mb-3 block">Referenzen</span>
              <h2 className="font-serif text-4xl text-stone-800">Holz in seiner <br/>schönsten Form</h2>
            </div>
            <div className="flex gap-1 text-amber-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="text-stone-500 text-sm ml-2 font-sans font-medium uppercase tracking-wider">5.0 / 50+ Bewertungen</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group overflow-hidden relative aspect-[4/5] bg-stone-200">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop" alt="Moderner Innenausbau" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-serif text-xl">Villa K., Hamburg</p>
                <p className="text-stone-300 text-sm mt-1">Kompletter Innenausbau</p>
              </div>
            </div>
            <div className="group overflow-hidden relative aspect-[4/5] bg-stone-200 md:mt-12">
              <img src="https://images.unsplash.com/photo-1598928506311-c55dd58025cb?q=80&w=2940&auto=format&fit=crop" alt="Maßküche" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-serif text-xl">Stadthaus, Berlin</p>
                <p className="text-stone-300 text-sm mt-1">Minimalistische Maßküche</p>
              </div>
            </div>
            <div className="group overflow-hidden relative aspect-[4/5] bg-stone-200 lg:mt-24">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2940&auto=format&fit=crop" alt="Wohnzimmer Möbel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-serif text-xl">Loft M., München</p>
                <p className="text-stone-300 text-sm mt-1">Schränke & Raumtrenner</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section id="cta" className="bg-stone-900 text-white py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-8">
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-stone-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Vision in echtes Handwerk übersetzen können. Kostenlos und unverbindlich.
          </p>
          <button className="bg-white text-stone-900 px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-stone-200 transition-colors">
            Erstgespräch vereinbaren
          </button>
        </div>
      </section>

    </div>
  );
}
