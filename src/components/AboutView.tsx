import { Sparkles, Award, Heart, Shield, Users } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-16">
      {/* Editorial Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-gold-700 uppercase">THE SOUL BEHIND THE STUDIO</span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight">
            Designed to help women show up beautifully, daily.
          </h1>
          <p className="text-sm text-brand-charcoal-light leading-relaxed">
            FemSocial Studio was founded under a simple realization: **Modern female founders are spending more time struggling with graphic design than actually working inside their genius zone.**
          </p>
          <p className="text-sm text-brand-charcoal-light leading-relaxed">
            Whether you are a coach, a boutique shop owner, or a rising content creator, your aesthetic is your virtual storefront. We blend conversion copywriting with premium editorial layouts to give you back your hours and help you build a brand that commands premium prices.
          </p>
        </div>

        {/* Decorative Collage Block */}
        <div className="relative p-2 rounded-3xl bg-brand-beige-100 border border-brand-beige-200">
          <img
            src="https://picsum.photos/seed/about_fem/600/600"
            alt="Feminine Workspace"
            className="rounded-2xl shadow-sm filter grayscale-[10%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 p-4 bg-white border border-brand-beige-200 rounded-2xl shadow-lg max-w-xs space-y-1">
            <span className="text-[10px] font-semibold text-brand-gold-700 uppercase tracking-widest block">OUR COMMUNITY REACH</span>
            <p className="font-serif text-lg font-bold text-brand-charcoal">15,000+ Creative Women</p>
            <p className="text-[11px] text-brand-charcoal-light">Upgrading their feeds, scheduling with ease, and scaling client leads globally.</p>
          </div>
        </div>
      </div>

      {/* Brand Core Values (Bento style grid) */}
      <div className="space-y-8">
        <div className="text-center max-w-md mx-auto space-y-2">
          <h2 className="text-3xl font-serif text-brand-charcoal">The FemSocial Values</h2>
          <p className="text-xs text-brand-charcoal-light">The foundational pillars behind every template, caption, and system we design.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-brand-beige-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Architectural Grace</h4>
            <p className="text-xs text-brand-charcoal-light leading-relaxed">
              We design layouts with soft, balanced margins, intentional negative space, and premium serif typography. Zero "AI slop" or clutter.
            </p>
          </div>

          <div className="p-6 bg-white border border-brand-beige-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold-100 text-brand-gold-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Conversion-First Engineering</h4>
            <p className="text-xs text-brand-charcoal-light leading-relaxed">
              Pretty feeds mean nothing if they do not convert. We craft strategic hooks and clear calls-to-action that capture email leads and client applications.
            </p>
          </div>

          <div className="p-6 bg-white border border-brand-beige-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-brand-beige-200 text-brand-charcoal-light flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Female Empowerment</h4>
            <p className="text-xs text-brand-charcoal-light leading-relaxed">
              We design tools that allow women to show up with confidence and authority, closing the gender funding and revenue gap in creative entrepreneurship.
            </p>
          </div>

          <div className="p-6 bg-white border border-brand-beige-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-brand-pink-100 text-brand-pink-300 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-brand-charcoal">Unmatched Simplicity</h4>
            <p className="text-xs text-brand-charcoal-light leading-relaxed">
              No complex software or steep learning curves. If you can click a button and type on a keyboard, you can customize our entire system inside free Canva.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Founder Editorial Quote */}
      <div className="p-8 rounded-3xl bg-brand-beige-100 border border-brand-beige-200/50 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold-100 rounded-full blur-2xl opacity-40 -z-10" />
        
        <p className="font-serif italic text-lg md:text-xl text-brand-charcoal max-w-2xl mx-auto leading-relaxed">
          "I wanted to create resources that feel like hiring a private $5,000/month boutique agency, but packed into a single accessible system. You don't need a designer. You need a formula."
        </p>
        <div className="mt-4 space-y-1">
          <span className="block text-xs font-semibold text-brand-charcoal tracking-wider uppercase">Amara Vance</span>
          <span className="block text-[10px] text-brand-gold-700 font-mono">FOUNDER & CHIEF CREATIVE STRATEGIST</span>
        </div>
      </div>
    </div>
  );
}
