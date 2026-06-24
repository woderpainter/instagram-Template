import { useState } from 'react';
import { Copy, Check, Palette, Type, CheckCircle2, Sliders, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ColorSpec {
  name: string;
  role: string;
  hex: string;
  class: string;
  textColor: string;
}

const colorGroups = [
  {
    category: "Aesthetic Neutrals",
    description: "Our foundation tones establishing spaciousness and high-end editorial calm.",
    colors: [
      { name: "Cream Softness", role: "Main Canvas", hex: "#FCF9F5", class: "bg-[#FCF9F5] border border-brand-beige-200", textColor: "text-brand-charcoal" },
      { name: "Warm Sand", role: "Section Contrast", hex: "#FAF4EB", class: "bg-[#FAF4EB] border border-brand-beige-200", textColor: "text-brand-charcoal" },
      { name: "Linen Sand", role: "Borders & Details", hex: "#F1E5D6", class: "bg-[#F1E5D6]", textColor: "text-brand-charcoal" },
      { name: "Toasted Almond", role: "Muted Text & Borders", hex: "#E6D2BC", class: "bg-[#E6D2BC]", textColor: "text-brand-charcoal" }
    ]
  },
  {
    category: "Blush Romantics",
    description: "Soft romantic pigments that elevate femininity and create gentle emotional triggers.",
    colors: [
      { name: "Blush Pink", role: "Glow Ambient Accent", hex: "#FEECEB", class: "bg-[#FEECEB]", textColor: "text-brand-charcoal" },
      { name: "Soft Coral", role: "Light Active State", hex: "#FCD5D2", class: "bg-[#FCD5D2]", textColor: "text-brand-charcoal" },
      { name: "Dusty Rose", role: "Romantic Highlight", hex: "#F9B6B0", class: "bg-[#F9B6B0]", textColor: "text-white" }
    ]
  },
  {
    category: "Champagne Accents",
    description: "Metallic-inspired highlights for premium trust, luxury branding, and CTA badges.",
    colors: [
      { name: "Champagne Gold", role: "Luxury Focal Badge", hex: "#D4AF37", class: "bg-[#D4AF37]", textColor: "text-white" },
      { name: "Aesthetic Amber", role: "Text Accents & Links", hex: "#C29B27", class: "bg-[#C29B27]", textColor: "text-white" },
      { name: "Golden Shadow", role: "Dark Luxury Details", hex: "#AA7F15", class: "bg-[#AA7F15]", textColor: "text-white" }
    ]
  },
  {
    category: "Signature Contrast",
    description: "Deep, crisp, high-contrast dark values that secure absolute typographic authority.",
    colors: [
      { name: "Deep Espresso", role: "Primary Headings & CTAs", hex: "#2A2525", class: "bg-[#2A2525]", textColor: "text-[#FCF9F5]" },
      { name: "Muted Charcoal", role: "Readable Body Copy", hex: "#4A4040", class: "bg-[#4A4040]", textColor: "text-[#FCF9F5]" }
    ]
  }
];

export default function StyleGuide() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'colors' | 'typography'>('colors');

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    });
  };

  return (
    <div className="bg-gradient-feminine rounded-3xl border-2 border-brand-beige-200 p-6 md:p-8 shadow-sm text-left relative overflow-hidden mt-12">
      {/* Subtle branding glows */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold-100 rounded-full blur-3xl opacity-55 -z-10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-pink-100 rounded-full blur-3xl opacity-60 -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-beige-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest text-brand-gold-700 bg-brand-gold-100 uppercase">
            <Sliders className="w-3 h-3" /> Brand System
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-charcoal mt-2">
            Interactive Style Guide
          </h3>
          <p className="text-xs text-brand-charcoal-light mt-0.5">
            100% synchronized color & type parameters used directly in our Canva suites.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-brand-beige-200/50 p-1 rounded-xl self-start sm:self-center border border-brand-beige-200">
          <button
            onClick={() => setActiveTab('colors')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'colors' 
                ? 'bg-white text-brand-charcoal shadow-2xs' 
                : 'text-brand-charcoal-light hover:text-brand-charcoal'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Palette</span>
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'typography' 
                ? 'bg-white text-brand-charcoal shadow-2xs' 
                : 'text-brand-charcoal-light hover:text-brand-charcoal'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Typography</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'colors' ? (
          <motion.div
            key="colors"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="pt-6 space-y-6"
          >
            <p className="text-xs text-brand-charcoal-light leading-relaxed max-w-xl">
              Tap any luxury pigment below to instantly copy its certified <span className="font-mono">HEX</span> value to your clipboard. Import these into Canva to match our brand's warm, cozy editorial atmosphere.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {colorGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-3">
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm text-brand-charcoal">
                      {group.category}
                    </h4>
                    <p className="text-[10px] text-brand-charcoal-light leading-snug">
                      {group.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {group.colors.map((color, colorIdx) => {
                      const isCopied = copiedHex === color.hex;
                      return (
                        <div
                          key={colorIdx}
                          onClick={() => handleCopy(color.hex)}
                          className="flex items-center justify-between p-2 rounded-xl bg-white/70 hover:bg-white border border-brand-beige-200/50 hover:border-brand-gold-500/30 cursor-pointer shadow-3xs transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-3">
                            {/* Color block */}
                            <div className={`w-9 h-9 rounded-lg ${color.class} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                              {isCopied && <Check className={`w-4 h-4 ${color.textColor}`} />}
                            </div>
                            
                            <div>
                              <span className="block text-xs font-semibold text-brand-charcoal leading-none">
                                {color.name}
                              </span>
                              <span className="text-[9px] text-brand-gold-700 font-mono tracking-wide uppercase leading-none mt-1 block">
                                {color.role}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-brand-charcoal-light bg-brand-beige-50 px-2 py-0.5 rounded border border-brand-beige-200 group-hover:text-brand-charcoal group-hover:bg-brand-beige-100 transition-colors">
                              {color.hex}
                            </span>
                            <div className="p-1 rounded text-brand-beige-300 group-hover:text-brand-gold-700 transition-colors">
                              {isCopied ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="typography"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="pt-6 space-y-6"
          >
            <p className="text-xs text-brand-charcoal-light leading-relaxed max-w-xl">
              We employ a premium typographic balance engineered for elite readability and visual depth, ensuring visitors recognize your authority instantly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {/* Cormorant Garamond Serif */}
              <div className="p-4 rounded-2xl bg-white border border-brand-beige-200 text-left space-y-3 shadow-3xs">
                <span className="text-[9px] font-mono text-brand-gold-700 font-bold tracking-widest uppercase">
                  DISPLAY & HEADINGS
                </span>
                <div className="font-serif">
                  <span className="block text-3xl italic text-brand-charcoal">Aa</span>
                  <span className="block text-xs font-bold text-brand-charcoal tracking-tight mt-1">
                    Cormorant Garamond
                  </span>
                </div>
                <p className="text-[10px] text-brand-charcoal-light leading-relaxed">
                  A high-contrast elegant serif featuring slender serifs, delicate teardrop terminals, and deep editorial authority. Used for main headlines.
                </p>
              </div>

              {/* Plus Jakarta Sans */}
              <div className="p-4 rounded-2xl bg-white border border-brand-beige-200 text-left space-y-3 shadow-3xs">
                <span className="text-[9px] font-mono text-brand-gold-700 font-bold tracking-widest uppercase">
                  BODY & INTERACTION
                </span>
                <div className="font-sans">
                  <span className="block text-3xl font-bold text-brand-charcoal">Aa</span>
                  <span className="block text-xs font-bold text-brand-charcoal tracking-tight mt-1">
                    Plus Jakarta Sans
                  </span>
                </div>
                <p className="text-[10px] text-brand-charcoal-light leading-relaxed">
                  A versatile, crisp, modern geometric sans-serif engineered for small sizes, long paragraph layouts, and high-density user interface labels.
                </p>
              </div>

              {/* Fira Code Monospace */}
              <div className="p-4 rounded-2xl bg-white border border-brand-beige-200 text-left space-y-3 shadow-3xs">
                <span className="text-[9px] font-mono text-brand-gold-700 font-bold tracking-widest uppercase">
                  TECHNICAL LABELS
                </span>
                <div className="font-mono">
                  <span className="block text-3xl text-brand-charcoal">Aa</span>
                  <span className="block text-xs font-bold text-brand-charcoal mt-1">
                    Fira Code
                  </span>
                </div>
                <p className="text-[10px] text-brand-charcoal-light leading-relaxed">
                  A polished monospaced typeface ideal for labels, structural credits, system badges, metadata rows, and copy codes.
                </p>
              </div>
            </div>

            {/* Typography Live Sandbox Demonstration */}
            <div className="p-4 rounded-2xl bg-brand-beige-50 border border-brand-beige-200 text-left space-y-2">
              <span className="text-[9px] font-mono text-brand-gold-700 uppercase block tracking-wider">
                LIVELY PAIRING SPECIMEN
              </span>
              <h4 className="font-serif text-2xl font-bold text-brand-charcoal leading-tight">
                Authentic Editorial Headline in <span className="italic font-normal text-brand-gold-600">Cormorant Garamond</span>
              </h4>
              <p className="font-sans text-xs text-brand-charcoal-light leading-relaxed">
                This is a paragraph composed in Plus Jakarta Sans. Notice how the crisp, airy letterforms balance perfectly with the delicate weight of the heading above.
              </p>
              <div className="flex gap-2 pt-2 border-t border-brand-beige-200/55">
                <span className="font-mono text-[9px] text-brand-gold-700 bg-brand-gold-100 px-2 py-0.5 rounded uppercase font-semibold">
                  h1.serif-display
                </span>
                <span className="font-mono text-[9px] text-brand-charcoal bg-brand-beige-200 px-2 py-0.5 rounded uppercase font-semibold">
                  p.sans-body
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
